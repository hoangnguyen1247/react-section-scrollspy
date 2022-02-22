import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import SectionScrollspy from "react-section-scrollspy";
import Button from "@mui/material/Button";

const Home: NextPage = () => {

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const sectionScrollspyRef = React.useRef(null);
    const [items,] = React.useState([{}, {}, {}, {}]);

    const handleSectionChange = (newIndex) => {
        setCurrentIndex(newIndex);
    }

    return (
        <Container maxWidth="lg">
            <div>
                <div style={{ height: "160px", overflow: "hidden" }}>
                    {items.map((i, index) => (
                        <Button
                            onClick={() => {
                                sectionScrollspyRef?.current?.tabClick({
                                    index: index,
                                })
                            }}
                        >
                            {`Tab ${index}`}
                        </Button>
                    ))}
                </div>
                <SectionScrollspy
                    innerRef={sectionScrollspyRef}
                    sectionClassName="sectionClassName"
                    sections={items}
                    renderSection={(props, index) => (
                        <div
                            key={index}
                            {...props}
                            style={{
                                height: 160,
                                // border: "1px solid green",
                                margin: "0 6",
                                padding: "0 8",
                            }}
                        >
                            div - #{index} - active section - #{currentIndex}
                        </div>
                    )}
                    onSectionChange={handleSectionChange}
                    headerOffset={160}
                />
                <div style={{ height: "200px", overflow: "hidden" }}>
                </div>
            </div>
        </Container>
    );
};

export default Home;
