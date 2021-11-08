import React from 'react';
import './scientificMethod.scss';
import Accordion from "Components/accordion/Accordion";

const accordionData = [
    {
        title: 'EMPIRICAL PROOF VIA DIRECT MARKET PARTICIPATION',
        description: '<p>It is our belief that any theory should have practical suitability for end users so that they may benefit from its robust and descriptive insight. Unfortunately, in mathematical economics and applied finance it is often the case that what can be empirically proven has limited forward forecasting power and use. This is due to the following reasons:\n' +
            '\n' +
            '<br/><br/>1. Traditional methodologies of academia utilize historical data to perform theoretical and analytical proofs, however what may work in the past may not work in the future.\n' +
            '<br/><br/>2. Most academic models have a linear structure that may not encompass transitional and stochastic properties of markets.\n' +
            '<br/><br/>3. Market impact and/or adverse selection is rarely considered, where one will never be able to execute on the exact same open/close price as suggested in historical repositories.\n' +
            '<br/><br/>4. The symbiotic effect of market participation on the actual price discovery. Every execution provides new information to market participants who will invariably respond to such information.\n' +
            '<br/><br/>Only through direct market participation can an economic theory take into account the above factors with the practicality of a proof predicated on the systems profit/loss and therefore indirectly on its ability to effectively diagnose temporal price dislocations.\n</p>',
        collapsed: false
    },
    {
        title: 'REINFORCEMENT LEARNING',
        description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio nulla, accumsan et massa a, auctor ultricies felis. Proin gravida vulputate neque non consectetur. Ut bibendum justo non lorem finibus, sit amet condimentum felis commodo. Nulla in massa ornare, mattis dolor ut, tincidunt mi. Nunc id bibendum nisi. Vestibulum ac nulla lorem. Sed id dolor imperdiet, aliquet sapien vel, accumsan libero. Suspendisse vel lorem a nibh porta gravida. Proin a lectus ut purus elementum dignissim quis vel sem. Nullam sit amet euismod arcu. Nunc velit magna, tempus nec ultricies sed, venenatis in justo. Nulla ut magna eu mauris eleifend volutpat. Morbi eget semper ipsum.\n' +
            '\n' +
            '<br/><br/>Maecenas bibendum sodales placerat. Etiam non velit leo. Vestibulum pulvinar tempor orci, interdum dignissim augue ultrices at. In semper est id ipsum vehicula, eu imperdiet nisl aliquet. Maecenas eget dui mauris. Proin faucibus, ligula sed ultricies accumsan, enim urna scelerisque ligula, vitae placerat ipsum elit at nibh. Vestibulum ut erat rutrum, dignissim nisl ultricies, condimentum est. Etiam eget enim at elit tincidunt vulputate. Mauris enim dui, venenatis vel ornare vel, fringilla nec ante. Phasellus non consequat risus.\n' +
            '\n' +
            '<br/><br/>Mauris faucibus dui nec quam accumsan finibus. Proin dapibus est purus, sit amet commodo leo fringilla eu. Mauris eget sodales nisl, at scelerisque risus. Aliquam mattis sit amet metus vitae convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce ipsum metus, sodales nec varius nec, faucibus vel lectus. Suspendisse vulputate quis nulla volutpat cursus. Donec imperdiet arcu massa, eget sollicitudin diam pharetra volutpat. Nam sed mollis libero, sit amet pellentesque urna. Suspendisse ultrices malesuada lacus, vel ultricies arcu tristique ut. Duis hendrerit euismod dui. Proin at ex nibh. Phasellus quis finibus augue, a molestie justo. Curabitur dignissim est leo, at volutpat ligula pretium eget. Donec velit enim, hendrerit et iaculis vel, auctor nec nunc.</p>',
        collapsed: true
    },
    {
        title: 'ENVIRONMENTAL DESIGN',
        description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio nulla, accumsan et massa a, auctor ultricies felis. Proin gravida vulputate neque non consectetur. Ut bibendum justo non lorem finibus, sit amet condimentum felis commodo. Nulla in massa ornare, mattis dolor ut, tincidunt mi. Nunc id bibendum nisi. Vestibulum ac nulla lorem. Sed id dolor imperdiet, aliquet sapien vel, accumsan libero. Suspendisse vel lorem a nibh porta gravida. Proin a lectus ut purus elementum dignissim quis vel sem. Nullam sit amet euismod arcu. Nunc velit magna, tempus nec ultricies sed, venenatis in justo. Nulla ut magna eu mauris eleifend volutpat. Morbi eget semper ipsum.\n' +
            '\n' +
            '<br/><br/>Maecenas bibendum sodales placerat. Etiam non velit leo. Vestibulum pulvinar tempor orci, interdum dignissim augue ultrices at. In semper est id ipsum vehicula, eu imperdiet nisl aliquet. Maecenas eget dui mauris. Proin faucibus, ligula sed ultricies accumsan, enim urna scelerisque ligula, vitae placerat ipsum elit at nibh. Vestibulum ut erat rutrum, dignissim nisl ultricies, condimentum est. Etiam eget enim at elit tincidunt vulputate. Mauris enim dui, venenatis vel ornare vel, fringilla nec ante. Phasellus non consequat risus.\n' +
            '\n' +
            '<br/><br/>Mauris faucibus dui nec quam accumsan finibus. Proin dapibus est purus, sit amet commodo leo fringilla eu. Mauris eget sodales nisl, at scelerisque risus. Aliquam mattis sit amet metus vitae convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce ipsum metus, sodales nec varius nec, faucibus vel lectus. Suspendisse vulputate quis nulla volutpat cursus. Donec imperdiet arcu massa, eget sollicitudin diam pharetra volutpat. Nam sed mollis libero, sit amet pellentesque urna. Suspendisse ultrices malesuada lacus, vel ultricies arcu tristique ut. Duis hendrerit euismod dui. Proin at ex nibh. Phasellus quis finibus augue, a molestie justo. Curabitur dignissim est leo, at volutpat ligula pretium eget. Donec velit enim, hendrerit et iaculis vel, auctor nec nunc.</p>',
        collapsed: true
    },
    {
        title: 'EXECUTING APPROACH',
        description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio nulla, accumsan et massa a, auctor ultricies felis. Proin gravida vulputate neque non consectetur. Ut bibendum justo non lorem finibus, sit amet condimentum felis commodo. Nulla in massa ornare, mattis dolor ut, tincidunt mi. Nunc id bibendum nisi. Vestibulum ac nulla lorem. Sed id dolor imperdiet, aliquet sapien vel, accumsan libero. Suspendisse vel lorem a nibh porta gravida. Proin a lectus ut purus elementum dignissim quis vel sem. Nullam sit amet euismod arcu. Nunc velit magna, tempus nec ultricies sed, venenatis in justo. Nulla ut magna eu mauris eleifend volutpat. Morbi eget semper ipsum.\n' +
            '\n' +
            '<br/><br/>Maecenas bibendum sodales placerat. Etiam non velit leo. Vestibulum pulvinar tempor orci, interdum dignissim augue ultrices at. In semper est id ipsum vehicula, eu imperdiet nisl aliquet. Maecenas eget dui mauris. Proin faucibus, ligula sed ultricies accumsan, enim urna scelerisque ligula, vitae placerat ipsum elit at nibh. Vestibulum ut erat rutrum, dignissim nisl ultricies, condimentum est. Etiam eget enim at elit tincidunt vulputate. Mauris enim dui, venenatis vel ornare vel, fringilla nec ante. Phasellus non consequat risus.\n' +
            '\n' +
            '<br/><br/>Mauris faucibus dui nec quam accumsan finibus. Proin dapibus est purus, sit amet commodo leo fringilla eu. Mauris eget sodales nisl, at scelerisque risus. Aliquam mattis sit amet metus vitae convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce ipsum metus, sodales nec varius nec, faucibus vel lectus. Suspendisse vulputate quis nulla volutpat cursus. Donec imperdiet arcu massa, eget sollicitudin diam pharetra volutpat. Nam sed mollis libero, sit amet pellentesque urna. Suspendisse ultrices malesuada lacus, vel ultricies arcu tristique ut. Duis hendrerit euismod dui. Proin at ex nibh. Phasellus quis finibus augue, a molestie justo. Curabitur dignissim est leo, at volutpat ligula pretium eget. Donec velit enim, hendrerit et iaculis vel, auctor nec nunc.</p>',
        collapsed: true
    },
];

const ScientificMethod = () => {

    return(
        <section className="section hero inner-page scientificMethod">
            <div className="abstract __7" />
            <div className="abstract-circle __3" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 offset-lg-1">
                        <div className="hero-title">
                            <h1 className="title-2 title-border">Scientific Method</h1>
                        </div>
                        <Accordion data={accordionData} />
                    </div>
                </div>
            </div>
        </section>
    )

};

export default ScientificMethod;
