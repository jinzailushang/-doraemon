const string = `
.wrap {
    max-width:400px;
    height: auto;
    position: relative;
    margin: 5% auto;
    -webkit-animation: volar 1s linear 2s infinite alternate; /* Safari 4.0 - 8.0 */
    animation: volar 1s linear 2s infinite alternate;
}

h1 {
    text-align: center;
}

.cajaovalo {
    width: 100px;
    height: 5px;
    background: transparent;
    margin: 0 auto 10px;
    position: relative;
}

.ovalo {
    width: 100px;
    height: 5px;
    margin: 0 auto;
    background-color: gray;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    border: 2px solid gray;
    z-index: 100;
    opacity: 0.6;
    position: absolute;
    top: 5px;

    -webkit-animation-name: rotar;
    -webkit-animation-duration: .1s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;

    -moz-animation-name: rotar;
    -moz-animation-duration: .1s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;

    -ms-animation-name: rotar;
    -ms-animation-duration: .1s;
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;

    -o-animation-name: rotar;
    -o-animation-duration: .1s;
    -o-animation-iteration-count: infinite;
    -o-animation-timing-function: linear;

    animation-name: rotar;
    animation-duration: .1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@-webkit-keyframes rotar {
    from {
        -webkit-transform: rotate3D(0, 1, 0, 0deg);
    }
    to {
        -webkit-transform: rotate3D(0, 1, 0, 360deg);
    }
}

@-moz-keyframes rotar {
    from {
        -moz-transform: rotate3D(0, 1, 0, 0deg);
    }
    to {
        -moz-transform: rotate3D(0, 1, 0, 360deg);
    }
}

@-ms-keyframes rotar {
    from {
        -ms-transform: rotate3D(0, 1, 0, 0deg);
    }
    to {
        -ms-transform: rotate3D(0, 1, 0, 360deg);
    }
}

@-o-keyframes rotar {
    from {
        -o-transform: rotate3D(0, 1, 0, 0deg);
    }
    to {
        -o-transform: rotate3D(0, 1, 0, 360deg);
    }
}

@keyframes rotar {
    from {
        transform: rotate3D(0, 1, 0, 0deg);
    }
    to {
        transform: rotate3D(0, 1, 0, 360deg);
    }
}

/*semicirculo*/

.semi-circulo {
    width: 20px;
    height: 10px;
    display: block;
    border: 2px solid #555;
    background: #BD8D22;
    -moz-border-radius: 100px 100px 0 0;
    -webkit-border-radius: 100px 100px 0 0;
    border-radius: 100px 100px 0 0;

    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    z-index: 2;
}

.palo {
    width: 7px;
    height: 30px;
    z-index: 1;
    background: #FCC136;
    position: relative;
    top: 7px;
    border: 2px solid black;
    margin: 0 auto;
}

.cabeza {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid black;
    margin: 0 auto;
    position: relative;
    background: #35A1C9;
    z-index: 100;
    overflow: hidden;
}

.circulo-dos {
    width: 170px;
    height: 170px;
    border-radius: 100%;
    background: white;
    border: 2px solid black;
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto
}

.boca {
    width: 140px;
    height: 70px;
    -moz-border-radius: 140px 140px 0 0;
    -webkit-border-radius: 140px 140px 0 0;
    border-radius: 140px 140px 0 0;
    background: #B11635;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    top: -13px;
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
}

.pupila {
    width: 23px;
    height: 15px;
    background: black;
    border-radius: 100%;
    -moz-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    position: absolute;
    top: 20px;
    left: 58px;
}

.pupila2 {
    width: 23px;
    height: 15px;
    background: black;
    border-radius: 100%;
    -moz-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    position: absolute;
    top: 20px;
    right: 58px;
}

.navegacion {
    margin: 0 auto;
}

.navegacion li {
    width: 48px;
    height: 48px;
    margin: 0 0;
    border-radius: 100%;
    overflow: hidden;
}

.elemento {
    width: 48px;
    height: 48px;
    background-color: white;
    position: relative;
    overflow: hidden;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    -ms-animation-duration: 1s;
    -o-animation-duration: 1s;
    /* Safari 4.0 - 8.0 */
    -webkit-animation-iteration-count: 3;
    -moz-animation-iteration-count: 3;
    -ms-animation-iteration-count: 3;
    -o-animation-iteration-cou
    line-height: 2.5;
    font-size: 30px;
    color: #000;
    position: absolute;

    text-align: center;
    font-weight: bold;
}

@-webkit-keyframes pulse {
    to {
        bottom: 100px;
    }
    from {
        bottom: 0;
    }
}

@-ms-keyframes pulse {
    to {
        bottom: 100px;
    }
    from {
        bottom: 0;
    }
}

@-o-keyframes pulse {
    to {
        bottom: 100px;
    }
    from {
        bottom: 0;
    }
}

@-moz-keyframes pulse {
    to {
        bottom: 100px;
    }
    from {
        bottom: 0;
    }
}

@keyframes pulse {
    to {
        bottom: 100px;
    }
    from {
        bottom: 0;
    }
}

.navegacion li a {
    display: block;
}

.navegacion a {
    height: 100%;
    width: 100%;
    display: block;
}

.navegacion {
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
}

.nariz {
    background: #B11735;
    width: 34px;
    height: 34px;
    border-radius: 100%;
    border: 1px solid black;
    margin: 0 auto;
    position: relative;
    top: -8px;
}

.palonariz {
    width: 2px;
    height: 20px;
    margin: 0 auto;
    background-color: black;
    position: relative;
    top: -8px;
}

.lunar {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: 1px solid #fff;
    position: absolute;
    background: white;
    top: 6px;
    left: 8px;
}

.iris1 {
    width: 6px;
    height: 3px;
    background: white;
    border-radius: 100%;
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto
}

.iris2 {
    width: 6px;
    height: 3px;
    background: white;
    border-radius: 100%;
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto
}

.corazon {
    position: relative;
    width: 100px;
    height: 90px;
    margin: 0 auto;

    top: -50px;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
}

.corazon::before, .corazon::after {
    content: "";
    position: absolute;
    left: 50px;
    top: 0;
    width: 50px;
    display: block;
    height: 80px;
    background: #CA2533;
    -webkit-border-radius: 50px 50px 0 0;
    -moz-border-radius: 50px 50px 0 0;
    -ms-border-radius: 50px 50px 0 0;
    -o-border-radius: 50px 50px 0 0;
    border-radius: 50px 50px 0 0;


    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);

    -webkit-transform-origin: 0 100%;
    -moz-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    -o-transform-origin: 0 100%;
    transform-origin: 0 100%;
}

.corazon::after {
    left: 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);

    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    -o-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
}

.huevo {
    width: 142px;
    height: 172px;
    background: #35A1C9;
    border: 2px solid black;
    -webkit-border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    -moz-border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    -ms-border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    -o-border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    margin: 0 auto;
    position: relative;
    top: -100px;
    z-index: 2;
}

.ovalocesta {
    width: 100px;
    height: 60px;
    margin: 0 auto;
    background: white;
    -moz-border-radius: 100px / 60px;
    -webkit-border-radius: 100px / 60px;
    border-radius: 100px / 60px;
    position: relative;
    top: 40px;
}

.cesta {
    width: 60px;
    height: 30px;
    -moz-border-radius: 60px 60px 0 0;
    -webkit-border-radius: 60px 60px 0 0;
    border-radius: 60px 60px 0 0;
    background: white;
    border: 2px solid black;
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: -20px;
    margin: auto;
    z-index: 2;
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
}

.campana {
    width: 35px;
    height: 35px;
    border: 2px solid black;
    border-radius: 100%;
    background-color: #F19629;
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: -60px;
    margin: auto;
    z-index: 3;
}

.bolanegra {
    width: 8px;
    height: 8px;

    border-radius: 100%;
    background-color: black;
    position: absolute;
    right: 0;
    top: 8px;
    left: 0;
    bottom: 0;
    margin: auto;
}

.palonegro {
    width: 2px;
    height: 15px;
    background-color: black;
    margin: 0 auto;
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(90deg);
    position: relative;
    top: 18px;
}

.bufanda {
    width: 100px;
    height: 50px;
    margin: 0 auto;
    background: #A1172E;
    -moz-border-radius: 100px / 50px;
    -webkit-border-radius: 100px / 50px;
    border-radius: 100px / 50px;
    position: relative;
    top: 55px;
    z-index: 2;
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes volar {
    0% {
        top: 0px;
        left: 0px;
    }
    25% {
        top: 0px;
        left: 100px;
    }
    50% {
        top: 100px;
        left: 100px;
    }
    75% {
        top: 100px;
        left: 0px;
    }
    100% {
        top: 0px;
        left: 0px;
    }
}

@-moz-keyframes volar {
    0% {
        top: 0px;
        left: 0px;
    }
    25% {
        top: 0px;
        left: 100px;
    }
    50% {
        top: 100px;
        left: 100px;
    }
    75% {
        top: 100px;
        left: 0px;
    }
    100% {
        top: 0px;
        left: 0px;
    }
}

@-ms-keyframes volar {
    0% {
        top: 0px;
        left: 0px;
    }
    25% {
        top: 0px;
        left: 100px;
    }
    50% {
        top: 100px;
        left: 100px;
    }
    75% {
        top: 100px;
        left: 0px;
    }
    100% {
        top: 0px;
        left: 0px;
    }
}

@-o-keyframes volar {
    0% {
        top: 0px;
        left: 0px;
    }
    25% {
        top: 0px;
        left: 100px;
    }
    50% {
        top: 100px;
        left: 100px;
    }
    75% {
        top: 100px;
        left: 0px;
    }
    100% {
        top: 0px;
        left: 0px;
    }
}

@keyframes volar {
    0% {
        top: 0px;
    }
    25% {
        top: 0px;
    }
    50% {
        top: 50px;
    }
    75% {
        top: 50px;
    }
    100% {
        top: 0px;
    }
}
`
export default string;
