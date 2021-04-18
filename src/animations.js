import {keyframes} from 'styled-components'

export const transformStyle = `
    transform: scale(1.05);
`

export const spin = keyframes`
from {
    transform: scale(1) rotate(0deg);
}

50% {
    transform: scale(1.2) rotate(360deg);
}

100% {
    transform: scale(1) rotate(360deg);
}
`

export const growTilt = keyframes`
from {
    transform: scale(1) rotate(0deg);
}

50% {
    transform: rotate(-4deg) scale(1.1);
}

100% {
    transform: scale(1) rotate(0deg);
}
`
export const gelatine = keyframes`
    from, to { transform: scale(1, 1); }
    25% { transform: scale(0.9, 1.1); }
    50% { transform: scale(1.1, 0.9); }
    75% { transform: scale(0.95, 1.05); }
`

export const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}
`
  