import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';


function WhyUs() {
    return (
<section class="bg-brown dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">WHY US?</h2>
          <p class="text-dbrown sm:text-xl dark:text-gray-400"> At Beauty Bliss, we embody the essence of the beauty journey. 
          We understand the transformative power of looking and feeling your best, and that's why we're dedicated to curating an exceptional collection of cosmetics 
          that empower you to conquer every moment with confidence and grace. 
          Our unwavering commitment to delivering premium products ensures that you can effortlessly express your unique style and radiate your inner beauty. 
          Trust Beauty Bliss to be your trusted partner in enhancing your natural allure and embracing your individuality,
           so you can seize each day with unyielding self-assurance and seize your beauty destiny.</p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
              <div class="flex justify-center items-center mb-4 w-12 h-12  lg:h-14 lg:w-14 dark:bg-primary-900">
              <FontAwesomeIcon icon={faRankingStar} beatFade style={{color: "#00000",}} size="lg"/>              
              </div>
              <h3 class="mb-2 text-xl font-bold text-white dark:text-white">Quality</h3>
              <p class="text-dbrown dark:text-gray-400">Our cosmetics are meticulously crafted with the highest-quality ingredients, carefully selected to bring out the best in your skin.
               We take pride in formulating our products without compromising on safety, ensuring that they are free from harmful chemicals. 
               With Beauty Bliss, you can indulge in your beauty routine with complete peace of mind, knowing that every application is a nourishing and wholesome experience. 
               We believe that beauty should never come at the expense of your well-being, and that's why we've dedicated ourselves to providing you with cosmetics that not only enhance your natural radiance but also prioritize the health and vitality of your skin. 
              Trust in our commitment to purity and let your beauty shine from within.</p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-12 h-12 lg:h-14 lg:w-14 dark:bg-primary-900">
              <FontAwesomeIcon icon={faPeopleGroup} beatFade style={{color: "#00000",}} size="lg"/>              </div>
              <h3 class="mb-2 text-xl font-bold text-white dark:text-white">Inclusivity</h3>
              <p class="text-dbrown dark:text-gray-400">Empowering Beauty. Our carefully curated range of shades and products celebrates the individuality of every skin tone and type. Experience the transformative power of inclusivity as you embark on a beauty journey tailored uniquely to you. 
              At Beauty Bliss, we believe that beauty knows no bounds and that everyone deserves to feel empowered and beautiful. Unleash your inner radiance and embrace your distinct beauty with our exceptional collection.</p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10  lg:h-14 lg:w-14 dark:bg-primary-900">
              <FontAwesomeIcon icon={faTruck} beatFade style={{color: "#00000",}} size="lg"/>             
             </div>
              <h3 class="mb-2 text-xl font-bold text-white dark:text-white">Convenience</h3>
              <p class="text-dbrown dark:text-gray-400"> Effortless Beauty, Delivered. Experience the convenience of shopping with confidence at our ecommerce store. Enjoy lightning-fast shipping, hassle-free returns, and personalized recommendations that ensure you have access to the beauty products you desire, precisely when you need them. At Beauty Bliss, we've streamlined your shopping experience, so you can effortlessly embrace your beauty journey with convenience and grace. Explore our collection and 
              elevate your beauty regimen with unparalleled ease.</p>
          </div>
      </div>
  </div>
</section>
    )
}

export default WhyUs
