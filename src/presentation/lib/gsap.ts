import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registra os plugins uma única vez para toda a aplicação.
gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }
