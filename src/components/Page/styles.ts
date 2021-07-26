import styled from 'styled-components';
import photo1 from './photo1.jpg';
import photo2 from './photo2.jpg';
import photo3 from './photo3.jpg';
import photo4 from './photo4.jpg';
import photo5 from './photo5.jpg';
import photo6 from './photo6.jpg';
import photo7 from './photo7.jpg';


export const Container = styled.div`
    .colored:nth-child(1) {
    background-image:url(${photo1});
    background-repeat: no-repeat;
    background-size: 100%;
    }
    .colored:nth-child(2) {
    background-image:url(${photo2});
    background-repeat: no-repeat;
    background-size: 100%;
    }
    .colored:nth-child(3) {
    background-image:url(${photo3});
    background-repeat: no-repeat;
    background-size: 100%;
    }
    .colored:nth-child(4) {
    background-image:url(${photo4});
    background-repeat: no-repeat;
    background-size: 100%;
    }
    .colored:nth-child(5) {
    background-image:url(${photo5});
    background-repeat: no-repeat;
    background-size: 100%;
    }
    .colored:nth-child(6) {
    background-image:url(${photo6});
    background-repeat: no-repeat;
    background-size: 100%;
    }
    .colored:nth-child(7) {
    background-image:url(${photo7});
    background-repeat: no-repeat;
    background-size: 100%;
    }
`;

export const Spacer = styled.div`
    height: 15vh;
`;