import React from "react";

function StepIndicator() {
    return (
        <>
            <h3 className="steps" >4 simple steps of picking the order</h3>
            <div className="stepCircle">
                <div className="container">
                    <div className="circle">
                        <div className="number">1</div>
                        <p className="text1"><h4>Product Retrieval:</h4>Gather ordered items from their respective storage areas, ensuring their quality and quantity.</p>
                    </div>
                    <div className="circle">
                        <div className="number">2</div>
                        <p className="text2"><h4>Quality Check:</h4>Verify the condition and quality of each item to meet customer expectations.</p>
                    </div>
                    <div className="circle">
                        <div className="number">3</div>
                        <p className="text3"><h4>Packaging and Presentation:</h4>Carefully package items with appropriate materials, adding any branding or promotional material as requi</p>
                    </div>
                    <div className="circle">
                        <div className="number">4</div>
                        <p className="text4">
                        <h4>Shipping and Logistics:</h4>Generate shipping labels, select the optimal shipping method, and hand over packages to the carrier for efficient delivery.





</p>
                    </div>
                    <div className="arrow">
                        <div className="arrow-body"></div>
                        <div className="arrow-head"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StepIndicator;
