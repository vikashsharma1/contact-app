import React, { useState } from 'react';
// import TestComponent from './TestComponent';

const WithHocLoader = (TestComponent) => {

    const NewComponent = (props) => {
        const [loader, setLoader] = useState(true);
        const handleLoader = (flag) => {
            setLoader(flag)
        }
        return <TestComponent loader={loader} handleLoader={handleLoader} {...props} />
    }
    return NewComponent;
}

export default WithHocLoader;