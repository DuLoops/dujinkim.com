import { Montserrat, Montserrat_Alternates, Courgette, Poiret_One } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
  })
  
  const montserratAlternates = Montserrat_Alternates({
    weight: ['200', '500', '500'],
    style: ['italic', 'normal'],
    subsets: ['latin'],
    variable: '--font-montserrat-alternates',
    display: 'swap',
  
  })
  
  const courgette = Courgette({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-courgette',
    display: 'swap',
  
  })
  
  const poiretOne = Poiret_One({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-poiret-one',
    display: 'swap',
  
  })
  
  
export { montserrat, montserratAlternates, courgette, poiretOne}  