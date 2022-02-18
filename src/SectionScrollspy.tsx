import * as React from "react";

type Props = {
    headerOffset?: number,
    sectionClassName?: string,
    sections: any[],
    renderSection: (props, index?) => React.ReactNode,
    onSectionChange: (index) => void,
    innerRef: React.RefObject<any>,
};

const defaultProps = {
    headerOffset: 0,
    sectionClassName: "section-scrollspy",
};

const SectionScrollspy = ({
    headerOffset,
    sectionClassName,
    sections,
    renderSection,
    onSectionChange,
    innerRef,
}: Props) => {

    const handleTabItemClick = (item, e?) => {
        e?.preventDefault();
        try {
            const targetSectionEl: HTMLElement = document.querySelector(`.${sectionClassName}_${item.index}`);

            if (targetSectionEl) {
                window.scrollTo({
                    top: targetSectionEl.offsetTop - headerOffset,
                    behavior: "smooth",
                });
            }
        } catch (error) {
            // do something
        }
    };

    const handleScrollEvent = () => {
        try {
            let indexTemp = 0;
            document
                .querySelectorAll(`.${sectionClassName}`)
                .forEach((item: any, index) => {
                    if (window.scrollY + headerOffset > item.offsetTop) {
                        indexTemp = index;
                    }
                });

            onSectionChange(indexTemp);
        } catch (e) {
            // do something
        }
    };

    React.useImperativeHandle(innerRef, () => ({
        tabClick: (item, e?) => {
            handleTabItemClick(item, e);
        },
    }));

    React.useEffect(() => {
        window.addEventListener("scroll", handleScrollEvent);

        return () => {
            window.removeEventListener("scroll", handleScrollEvent);
        };
    }, []);

    return (
        <>
            {sections.map((item, index) => renderSection({
                ...item,
                className: `${sectionClassName} ${sectionClassName}_${index}`,
            }, index))}
        </>
    );
};

SectionScrollspy.defaultProps = defaultProps;

export default SectionScrollspy;
