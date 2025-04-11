import './style.css'
import katex from 'katex';

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gray-100">
    <h1 class="text-4xl font-bold text-center pt-8 mb-8">How fast does a tank drain?</h1>
    
    <div class="max-w-4xl mx-auto bg-white border-2 border-black">
      <div class="flex justify-center border-b-2 border-gray">
        <button class="tab-button active" data-tab="concept">Concept</button>
        <button class="tab-button" data-tab="applied-project">Applied Project</button>
        <button class="tab-button" data-tab="demo">Demo</button>
      </div>

      <div class="p-5">

        <div id="concept" class="tab-content active">
          <h2 class="text-2xl font-semibold mb-4 text-center">Understanding Tank Drainage</h2>
          <h1 class="text-2xl font-semibold mb-2">9.1</h1>
          <p>
            In chapter 9 the book introduces the idea of differential equations. Well, what is a differential equation? It is an equation where on one side there is an unknown function and on the other there is one or more of that functions derivative. Lets look at an example:
          </p>
          <div class="my-6 text-center">
            <div id="equation1" class="inline-block px-8 py-4 bg-gray-100 rounded-lg"></div>
          </div>
          <p>Here the unknown function is y becuase y is the same thing as f(x). 
          On one side we have y and on the other we have a derivative of y so this is a good example of a differential equation. 
          The solution of this equation is to find what the function of y is. 
          Throughout the applied project we solve and find the solutions of various differential equations.</p>

          <div class="my-6">
            <h1 class="text-2xl font-semibold mb-2">9.2</h1>
            <p>9.2 talks about direction feilds which are a graphical approch to find information on a solution of a differential equation. 
            Although we dont use them in the applied project, it is still an important concept. 
            Lets look at the directional feild of y' = x+y for example: </p>
            <div class="my-6">
              <img src="./feild.png" class="max-w-xs rounded-lg shadow-md mx-auto"/>
            </div>
            <p>To find a solution using this we can just choose a point and draw the curve of the solution by following the Lines. 
            Here what it looks like for the point (0,1): </p>
            <div class="my-6">
              <img src="./feild2.png" class="max-w-xs rounded-lg shadow-md mx-auto"/>
            </div>
          </div>

          <div class="my-6">
            <h1 class="text-2xl font-semibold mb-2">9.3</h1>
            <p>9.3 talks about seperable equations and 
            it is the most important concept here becuase these are differential equations we solve in the applied project. 
            A seperable equation is a first-order differential equation that is written in the form: 
            </p>
            <div class="my-6 text-center">
              <div id="equation1.2" class="inline-block px-8 py-4 bg-gray-100 rounded-lg"></div>
            </div>
            <p>The reason it is called a seperable equation is becuase to solve it we seperate the x's and y's like this: </p>
            <div class="my-6 text-center">
              <div id="equation1.3" class="inline-block px-8 py-4 bg-gray-100 rounded-lg"></div>
            </div>
            <p>Then we integrate both sides.</p>
            <div class="my-6 text-center">
              <div id="equation1.4" class="inline-block px-8 py-4 bg-gray-100 rounded-lg"></div>
            </div>
            <p>This concept is what is mostly displayed in the applied project.</p>

          </div>
        </div>







        <div id="applied-project" class="tab-content">
          <h2 class="text-2xl font-semibold mb-4 text-center">Project solutions</h2>
          
          <div class="justify-center border-b flex space-x-4">
            <button class="question-tab active" data-question="q1">Question 1</button>
            <button class="question-tab" data-question="q2">Question 2</button>
            <button class="question-tab" data-question="q3">Question 3</button>
            <button class="question-tab" data-question="q4">Question 4</button>
          </div>


          <div id="q1" class="question-content active mt-4">
            <h3 class="text-xl font-semibold mb-4">(a)</h3>
            <p class="text-gray-700">
              Suppose the tank is cylindrical with height 6 ft and radius 2 ft and the hole is circular with radius 1 inch. If we take g = 32 ft/s^2, show that h satisfies the differential equation</p>
            <div class="my-6 text-center">
              <div id="equation2" class="inline-block px-8 py-4 bg-gray-100 rounded-lg"></div>
            </div>

            <div class="space-y-4">
              <h3 class="text-xl font-semibold">Given Values:</h3>
              <div class="space-y-2">
                <div id="value1" class="px-4"></div>
                <div id="value2" class="px-4"></div>
                <div id="value3" class="px-4"></div>
                <div id="value4" class="px-4"></div>
              </div>
            </div>

            <h3 class="text-xl font-semibold mt-6">Solution Steps:</h3>
            <div class="space-y-4">
              <p class="text-gray-700">To solve this we need to use Torricelli's law. Where a is the area of the hole (πrh^2):</p>
              <div id="step1" class="px-4 py-2 bg-gray-50"></div>
              <p class="text-gray-700 text-center">The goal is to subtitute the values of this equation to get the equation stated in the question.</p>
              
              <p class="text-gray-700">Recall the volume of a cylinder:</p>
              <div id="step2" class="px-4 py-2 bg-gray-50"></div>
              
              <p class="text-gray-700">We get the derivative of this equation:</p>
              <div id="step3" class="px-4 py-2 bg-gray-50"></div>
              <p class="text-gray-700 text-center">Note the pi r squared does not change because they are constants.</p>
              
              <p class="text-gray-700">We plug in 2 for r:</p>
              <div id="step4" class="px-4 py-2 bg-gray-50"></div>
              
              <p class="text-gray-700">Replace dV/dt in Torricelli's law:</p>
              <div id="step5" class="px-4 py-2 bg-gray-50"></div>
              
              <p class="text-gray-700">Plug in values for a and g:</p>
              <div id="step6" class="px-4 py-2 bg-gray-50"></div>
              
              <p class="text-gray-700">Solve it out to get:</p>
              <div id="step7" class="px-4 py-2 bg-gray-50"></div>
              
              <p class="text-gray-700">Cancel 4π to get the original equation:</p>
              <div id="step8" class="px-4 py-2 bg-gray-50"></div>
            </div>

            <div class=" mt-4">
              <h3 class="text-xl font-semibold mb-4">(b)</h3>
              <p class="text-gray-700">Solve this equation to find the height of the water at time t, assuming the tank is full at time t = 0.</p>

              <div class="space-y-4">
              <h3 class="text-xl font-semibold">Given Values:</h3>
                <div class="space-y-2">
                  <div id="value5" class="px-4"></div>
                </div>
              </div>

              <h3 class="text-xl font-semibold mt-6">Solution Steps:</h3>
              <div class="space-y-4">
                <p>Our goal is to trasform the equation we got in part a to an eqution where h equals something in terms of t. We can do this by getting h and t on opposite sides.</p>
                <div id="step1b" class="px-4 py-2 bg-gray-50"></div>

                <p>Now that we have seperatated them we can integrate both sides to deal with the dirivitives</p>
                <div id="step2b" class="px-4 py-2 bg-gray-50"></div>

                <p>After integration we get this. Where c1 and c2 are the constants from integrating</p>
                <div id="step3b" class="px-4 py-2 bg-gray-50"></div>

                <p>Now we subtract c2 and c1 to get one constant.</p>
                <div id="step4b" class="px-4 py-2 bg-gray-50"></div>

                <p>Then using the given values we plug in 6 for h and 0 for t to solve for c.</p>
                <div id="step5b" class="px-4 py-2 bg-gray-50"></div>

                <p> 0/72 cancels and we get the value for c</p>
                <div id="step6b" class="px-4 py-2 bg-gray-50"></div>

                <p>We then substitue that into our final equation to continue solving</p>
                <div id="step7b" class="px-4 py-2 bg-gray-50"></div>

                <p>Then divide both sides by two.</p>
                <div id="step8b" class="px-4 py-2 bg-gray-50"></div>

                <p>Finally square both sides for the final equation.</p>
                <div id="step9b" class="px-4 py-2 bg-gray-50"></div>
              </div>
            </div>








            <div class=" mt-4">
              <h3 class="text-xl font-semibold mb-4">(c)</h3>
              <p class="text-gray-700">How long will it take for the water to drain completely?</p>

              <div class="space-y-4">
              <h3 class="text-xl font-semibold">Given Values:</h3>
                <div class="space-y-2">
                  <div id="value6" class="px-4"></div>
                </div>
              </div>

              <h3 class="text-xl font-semibold mt-6">Solution Steps:</h3>
              <div class="space-y-4">
                <p>If we want to find t when the height is zero. All we have to do is set h to zero and solve.</p>
                <div id="step1c" class="px-4 py-2 bg-gray-50"></div>

                <p>First square root both sides to remove the square</p>
                <div id="step2c" class="px-4 py-2 bg-gray-50"></div>

                <p>Move t/144 to the other side</p>
                <div id="step3c" class="px-4 py-2 bg-gray-50"></div>

                <p>Finally multiply both sides by 144 to get your answer.</p>
                <div id="step4c" class="px-4 py-2 bg-gray-50"></div>
                <p class="text-gray-700 text-center">This is equal to around 353 seconds or close to 6 minutes.</p>
              
                
              </div>
            </div>
            
          </div>









          <div id="q2" class="question-content mt-4">
            <p>Because of the rotation and viscosity of the liquid, the theoretical model given by Torricelli's Law isn't quite accurate. Instead, we will use this model.</p>
            <div class="my-6 text-center">
              <div id="equation3" class="inline-block px-8 py-4 bg-gray-100 rounded-lg"></div>
            </div>
            <p class="text-center">The constant k (which depends on the physical properties of the liquid) is determined from data concerning the draining of the tank.</p>
            
            <h3 class="text-xl font-semibold mb-4">(a)</h3>
            <p class="text-gray-700">Suppose that a hole is drilled in the side of a cylindrical bottle and the height h of the
            water (above the hole) decreases from 10 cm to 3 cm in 68 seconds. Use Equation 2 to
            find an expression for h(t). Evaluate h(t) for t = 10, 20, 30, 40, 50, 60.
            </p>
            
            <div class="space-y-4">
              <h3 class="text-xl font-semibold">Given Values:</h3>
              <div class="space-y-2">
                <div id="value7" class="px-4"></div>
                <div id="value8" class="px-4"></div>
              </div>
            </div>

            <h3 class="text-xl font-semibold mt-6">Solution Steps:</h3>
            <div class="space-y-4">
              <p>This question is very similar to 1b. To find an expression for h(t) we have seperate h and t.</p>
              <div id="step2a1" class="px-4 py-2 bg-gray-50"></div>

              <p>After getting both on one side we integrate.</p>
              <div id="step2a2" class="px-4 py-2 bg-gray-50"></div>

              <p>Integration gives us this.</p>
              <div id="step2a3" class="px-4 py-2 bg-gray-50"></div>
              <p class="text-gray-700 text-center">k is a constant so it becomes kt</p>

              <p>subtract constants to turn them into one.</p>
              <div id="step2a4" class="px-4 py-2 bg-gray-50"></div>

              <p>Using h(0) = 10, we can replace h and t to find c</p>
              <div id="step2a5" class="px-4 py-2 bg-gray-50"></div>

              <p>Symplify.</p>
              <div id="step2a6" class="px-4 py-2 bg-gray-50"></div>

              <p>Now, using h(68) = 3, we can replace h and t to find k</p>
              <div id="step2a7" class="px-4 py-2 bg-gray-50"></div>

              <p>Subtract.</p>
              <div id="step2a8" class="px-4 py-2 bg-gray-50"></div>

              <p>Divide by 68.</p>
              <div id="step2a9" class="px-4 py-2 bg-gray-50"></div>

              <p>Symplify.</p>
              <div id="step2a10" class="px-4 py-2 bg-gray-50"></div>

              <p>Plug in k into our equation.</p>
              <div id="step2a11" class="px-4 py-2 bg-gray-50"></div>

              <p>Divide by 2 on both sides.</p>
              <div id="step2a12" class="px-4 py-2 bg-gray-50"></div>

              <p>Finally, sqaure both sides.</p>
              <div id="step2a13" class="px-4 py-2 bg-gray-50"></div>

              <p>Once we Evaluate h(t) for t - 10, 20, 30, 40, 50, 60, we get these values.</p>
              <div id="step2a14" class="px-4 py-2 bg-gray-50"></div>

            </div>

            <div class=" mt-4">
              <h3 class="text-xl font-semibold mb-4">(b)</h3>
              <p>Drill a 4-mm hole near the bottom of the cylindrical part of a two-liter plastic softdrink bottle. 
              Attach a strip of masking tape marked in centimeters from 0 to 10, with 0 corresponding to the top of the hole. 
              With one finger over the hole, fill the bottle with water to the 10-cm mark. 
              Then take your finger off the hole and record the values of h(t) for t = 10, 20, 30, 40, 50, 60 seconds. 
              (You will probably find that it takes 68 seconds for the level to decrease to h = 3 cm.) 
              Compare your data with the values of h(t) from part (a). 
              How well did the model predict the actual values?
              </p>
              
              <div class="my-4">
                <h3 class="text-xl font-semibold">My Values:</h3>
              </div>
              <div id="step2a15" class="px-4 py-2 bg-gray-50"></div>
              <div class="my-6">
                <img src="./bottle.jpg" class="max-w-xs rounded-lg shadow-md mx-auto"/>
              </div>
              <p>The longer time went on the more the actual values were skewed from the models prediction. 
              I belive this is not the models fault becuase the shape of the bottle was not a perfect cylinder. 
              Below the 2cm line it starts to cave in. My error also played a factor in this experiment. 
              The final value was off by 1cm which is quite a lot.</p>
              
            </div>

          </div>




          <div id="q3" class="question-content mt-4">
            <p class="text-gray-700">Suppose such a tank has radius 10 ft and the diameter of the outlet is 2.5 inches. 
            An engineer has to guarantee that the water pressure at the tank outlet will be at least 2160 lb/ft^2 for a period
            of 10 minutes. How tall should the engineer specify the tank to be in order to make such a guarantee? 
            (Use the fact that the water pressure at a depth of d feet is P = 62.5d lb/ft^2)</p>

            <div class="space-y-4">
              <h3 class="text-xl font-semibold">Given Values:</h3>
              <div class="space-y-2">
                <div id="value9" class="px-4"></div>
                <div id="value10" class="px-4"></div>
                <div id="value11" class="px-4"></div>
                <div id="value12" class="px-4"></div>
              </div>
            </div>

            <h3 class="text-xl font-semibold mt-6">Solution Steps:</h3>
            <div class="space-y-4">
              <p>This question is very similar to question 1. The only difference is we are now using an inequality to find the equation for h.
              We start off using Torricelli's law.</p>
              <div id="step3a1" class="px-4 py-2 bg-gray-50"></div>

              <p>Get the daravitive of V just like before.</p>
              <div id="step3a2" class="px-4 py-2 bg-gray-50"></div>

              <p>Plug in our values.</p>
              <div id="step3a3" class="px-4 py-2 bg-gray-50"></div>

              <p>Simplify.</p>
              <div id="step3a4" class="px-4 py-2 bg-gray-50"></div>
              <p class="text-gray-700 text-center">As you can see we ended up with an equation very similar to the one in question 1a.</p>

              <p>What we did before is that we got the h's and t's on one side then integrated. Let's do it here.</p>
              <div id="step3a5" class="px-4 py-2 bg-gray-50"></div>

              <p>We get this.</p>
              <div id="step3a18" class="px-4 py-2 bg-gray-50"></div>

              <p>Divide by 2 and square both sides to get our final equation for h.</p>
              <div id="step3a6" class="px-4 py-2 bg-gray-50"></div>
              <p class="text-gray-700 text-center">c divided by 2 is still a constant so we keep it as c.</p>

              <p>Now our goal is to get values for h(t) and t to get c. We can use the pressure equation to find it.</p>
              <div id="step3a7" class="px-4 py-2 bg-gray-50"></div>

              <p>Depth and height are the same length so we can replace d with h(t) to get P based on time</p>
              <div id="step3a8" class="px-4 py-2 bg-gray-50"></div>

              <p>We can now replace P(600) in our inequality with our equation by setting t to 600</p>
              <div id="step3a9" class="px-4 py-2 bg-gray-50"></div>

              <p>Then we divide by 62.5 and get our h(t) and t values</p>
              <div id="step3a10" class="px-4 py-2 bg-gray-50"></div>

              <p>We can replace h(t) with our previous equation and plug 600 for t</p>
              <div id="step3a11" class="px-4 py-2 bg-gray-50"></div>

              <p>Square root both sides then move the fraction.</p>
              <div id="step3a12" class="px-4 py-2 bg-gray-50"></div>

              <p>We plug it into a calulator and get this inequality to use for later.</p>
              <div id="step3a13" class="px-4 py-2 bg-gray-50"></div>

              <p>The original question asked for the height of the tank which is h(0).</p>
              <div id="step3a14" class="px-4 py-2 bg-gray-50"></div>

              <p>Solve it out to get this.</p>
              <div id="step3a15" class="px-4 py-2 bg-gray-50"></div>

              <p>We can find c squared by using the inequality we got before.</p>
              <div id="step3a16" class="px-4 py-2 bg-gray-50"></div>

              <p>Becuase c sqaured is our tank height this is our final value.</p>
              <div id="step3a17" class="px-4 py-2 bg-gray-50"></div>
              <p class="text-gray-700 text-center">The tank must be at least 37.69 ft tall to guarantee that the water pressure at the tank outlet will be at least 2160 lb/ft^2 for a period
            of 10 minutes.</p>

            </div>

          </div>
















          <div id="q4" class="question-content mt-4">

            <p>Not all water tanks are shaped like cylinders. 
            To get the volume of a cylinder is easy becuase with pi*r^2*h the radius of the cylinder never changes 
            as the height of the water decreases. But with a sphere for example it does. 
            Torricelli's Law does not account for this, so we have to change it.</p>
            <p class="my-4">To get volume it is the cross sectional area time the height. If the area is changing we have to get it at every height.
            So we use A(h) for the cross sectional area of the tank at height h. This makes the volume of tank:</p>
            <div class="my-6 text-center">
              <div id="equation4" class="inline-block px-8 py-4 bg-gray-100 rounded-lg"></div>
            </div>
            <p class="text-center">Note that x is just a placeholder variable</p>
            <p>So we can turn the dirivitive of volume with respect to time into:</p>
            <div class="my-6 text-center">
              <div id="equation5" class="inline-block px-8 py-4 bg-gray-100 rounded-lg"></div>
            </div>
            <p>and so Torricelli's Law becomes:</p>
            <div class="my-6 text-center">
              <div id="equation6" class="inline-block px-8 py-4 bg-gray-100 rounded-lg"></div>
            </div>
            
            <h3 class="text-xl font-semibold mb-4">(a)</h3>
            <p class="text-gray-700">
            Suppose the tank has the shape of a sphere with radius 2m and is initially half full of water. 
            If the radius of the circular hole is 1cm and we take g = 10m/s^2, show that h satisfies the differential equation:</p>
            <div class="my-6 text-center">
              <div id="equation7" class="inline-block px-8 py-4 bg-gray-100 rounded-lg"></div>
            </div>

            <div class="space-y-4">
              <h3 class="text-xl font-semibold">Given Values:</h3>
              <div class="space-y-2">
                <div id="value13" class="px-4"></div>
                <div id="value14" class="px-4"></div>
                <div id="value15" class="px-4"></div>
              </div>
            </div>

            <h3 class="text-xl font-semibold mt-6">Solution Steps:</h3>
            <div class="space-y-4">
              <p>First we can take Torricelli's Law and plug in our variables.</p>
              <div id="step4a1" class="px-4 py-2 bg-gray-50"></div>

              <p>Cancel out pi's.</p>
              <div id="step4a2" class="px-4 py-2 bg-gray-50"></div>

              <p>We know radius changes based on height becuase our tank is a sphere. Becuase the tank is half full we know that the water height is 2m becuase that is the radius of the sphere.</p>
              <div id="step4a3" class="px-4 py-2 bg-gray-50"></div>

              <p>To find out how the radius decreases as height decreases we can visualize it with this graph.</p>
              <img src="./graph.png" class="max-w-xs rounded-lg shadow-md mx-auto"/>
              <p class="text-center">This is a side view of the sphere. 
              As the height of the water level decreases the radius will decrease following the curve of this circle.
              So we can find r by using the equation of this circle.
              </p>

              <p>Here is the equation:</p>
              <div id="step4a5" class="px-4 py-2 bg-gray-50"></div>
              
              <p>Then get r squared by itself.</p>
              <div id="step4a6" class="px-4 py-2 bg-gray-50"></div>

              <p>Factor out.</p>
              <div id="step4a7" class="px-4 py-2 bg-gray-50"></div>

              <p>Subtract the 4</p>
              <div id="step4a8" class="px-4 py-2 bg-gray-50"></div>

              <p>Finally replace the r squared in the equation.</p>
              <div id="step4a9" class="px-4 py-2 bg-gray-50"></div>
            </div>

            <div class=" mt-4">
              <h3 class="text-xl font-semibold mb-4">(b)</h3>
              <p class="text-gray-700">How long will it take for the water to drain completely?</p>

              <div class="space-y-4">
                <h3 class="text-xl font-semibold mt-6">Solution Steps:</h3>
                <div class="space-y-4">
                  <p>We want to find a time where h(t)=0. To start lets get divide both sides by square root of h to get the h's and t's separate.</p>
                  <div id="step4b1" class="px-4 py-2 bg-gray-50"></div>

                  <p>We can turn the sqaure root into a half and split the fraction</p>
                  <div id="step4b2" class="px-4 py-2 bg-gray-50"></div>

                  <p>Simplify the fractions and move dt over aswell.</p>
                  <div id="step4b3" class="px-4 py-2 bg-gray-50"></div>

                  <p>Now we take the integrals and combine the constants</p>
                  <div id="step4b4" class="px-4 py-2 bg-gray-50"></div>

                  <p>Now that the h's and t's are on one side, we can use h(0)=2 to find c.</p>
                  <div id="step4b5" class="px-4 py-2 bg-gray-50"></div>

                  <p>Symplify.</p>
                  <div id="step4b6" class="px-4 py-2 bg-gray-50"></div>

                  <p>Now lets find when h(t)=0.</p>
                  <div id="step4b7" class="px-4 py-2 bg-gray-50"></div>

                  <p>Symplify and we get:</p>
                  <div id="step4b8" class="px-4 py-2 bg-gray-50"></div>
                  <p class="text-center">It will take around 197 minutes for the water to drain completely.</p>

                </div>
              </div>
            </div>

          </div>
        </div>





        
       








        
        <div id="demo" class="tab-content">
          <h2 class="text-2xl font-semibold mb-4 text-center">Interactive Demonstration</h2>
          
          <!-- Cylinder Tank Section -->
          <div class="flex gap-8 items-center justify-center">
            <div class="w-64">
              <svg width="200" height="300" class="mx-auto">
                
                <!-- Water level -->
                <rect x="40" y="31" width="120" height="226" fill="#60a5fa" id="water-level"/>
                
                <!-- Cylinder body -->
                <path d="M 159 54 M 160 235 C 130 265 70 265 40 235 L 40 326 L 160 326"
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      id="cylinder-outline"
                      stroke-linejoin="round" />
                <path d="M 160 53 M 40 53 C 70 23 130 23 160 53 L 160 12 L 40 12"
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      id="cylinder-outline"
                      stroke-linejoin="round" />
                <path d="M 160 55 L 160 235 C 130 265 70 265 40 235 L 40 55 C 70 25 130 25 160 55 C 130 85 70 85 40 55" 
                      fill="none" 
                      stroke="black" 
                      stroke-width="3"
                      stroke-linejoin="round"
                      id="cylinder"/>
                
                
                <!-- Hole at bottom -->
                <circle cx="100" cy="252" r="5" fill="none" stroke="black" stroke-width="2"/>
              </svg>
            </div>

            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Tank Height (ft)</label>
                <input type="number" id="tank-height" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value="6">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Tank Radius (ft)</label>
                <input type="number" id="tank-radius" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value="2">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Hole Radius (inches)</label>
                <input type="number" id="hole-radius" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value="1">
              </div>
              <div class="flex justify-between">
                <div class="pt-4">
                  <button id="empty-tank" class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Empty Tank
                  </button>
                </div>
                <div class="pt-4">
                  <button id="skip" class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Skip
                  </button>
                </div>
              </div>
              <div id="timer" class="text-center text-xl font-semibold">
                Time: 0.0s
              </div>
            </div>
          </div>
          <h3 class="text-2xs font-semibold mb-4 text-center">Cylinder</h3>
          <!-- Sphere Tank Section -->
          
          <div class="flex gap-8 items-center justify-center mt-12">
            
            <div class="w-64">
              <svg width="200" height="300" class="mx-auto">
                <!-- Water level -->
                <rect x="20" y="150" width="160" height="80" fill="#60a5fa" id="circular-water-level"/>
                
                <!-- Tank outline -->
                <circle cx="100" cy="150" r="100" fill="none" stroke="white" stroke-width="40"/>
                <circle cx="100" cy="150" r="80" fill="none" stroke="black" stroke-width="3"/>

                <path d="M 180 150 C 144 184 53 184 20 150" fill="none" stroke="black" stroke-width="2"/>
                
                <!-- Hole at bottom -->
                <circle cx="100" cy="225" r="5" fill="none" stroke="black" stroke-width="2"/>
              </svg>
            </div>

            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Tank Radius (m)</label>
                <input type="number" id="circular-tank-radius" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value="2">
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700">Hole Radius (cm)</label>
                <input type="number" id="circular-hole-radius" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value="1">
              </div>

              <div class="flex justify-between">
                <div class="pt-4 mx-auto">
                  <button id="skip-circle" class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Skip
                  </button>
                </div>
              </div>

              <div id="circular-timer" class="text-center text-xl font-semibold">
                Time: 0.0s
              </div>
            </div>
          </div>
          <h3 class="text-2xs font-semibold mb-4 text-center">Sphere</h3>

        </div>




      </div>
    </div>
  </div>
`


// Tank parameters
let tankHeight = 6;
let tankRadius = 2;
let holeRadius = 1/12;

// Get input elements
const tankHeightInput = document.getElementById('tank-height');
const tankRadiusInput = document.getElementById('tank-radius');
const holeRadiusInput = document.getElementById('hole-radius');

// Add input event listeners
tankHeightInput.addEventListener('input', (e) => {
  tankHeight = parseFloat(e.target.value);
  console.log('Tank Height:', tankHeight);
});

tankRadiusInput.addEventListener('input', (e) => {
  tankRadius = parseFloat(e.target.value);
  console.log('Tank Radius:', tankRadius);
});

holeRadiusInput.addEventListener('input', (e) => {
  holeRadius = parseFloat(e.target.value)/12; // Convert inches to feet
  console.log('Hole Radius:', holeRadius);
});
  


document.getElementById('skip').addEventListener('click', () => {
  const waterLevel = document.getElementById('water-level');
  const button = document.getElementById('empty-tank');
  // Stop animation
  clearInterval(animationInterval);
  timer.textContent = `Time: ${((Math.pow(tankHeight,1/2)*Math.pow(tankRadius,2))/(4*Math.pow(holeRadius,2))).toFixed(1)}s`;
  waterLevel.setAttribute('height', 0);
  
  // Re-enable button
  button.disabled = false;
  tankHeightInput.disabled = false;
  tankRadiusInput.disabled = false;
  holeRadiusInput.disabled = false;
  button.classList.remove('bg-gray-500');
  button.classList.add('bg-blue-500', 'hover:bg-blue-600');
}); 

let animationInterval;
let startTime;

document.getElementById('empty-tank').addEventListener('click', () => {
  // Reset any existing animation
  clearInterval(animationInterval);
  
  const waterLevel = document.getElementById('water-level');
  const timer = document.getElementById('timer');
  const button = document.getElementById('empty-tank');
  
  // Reset water level
  waterLevel.setAttribute('height', 226);
  waterLevel.setAttribute('y', 31);
  
  // Disable button during animation
  button.disabled = true;
  tankHeightInput.disabled = true;
  tankRadiusInput.disabled = true;
  holeRadiusInput.disabled = true;
  button.classList.add('bg-gray-500');
  button.classList.remove('bg-blue-500', 'hover:bg-blue-600');
  
  startTime = Date.now();
  let newHeight = 226
  animationInterval = setInterval(() => {
    const elapsedTime = (Date.now() - startTime) / 1000; // Convert to seconds
    

    if (newHeight <= 0.1) {
      // Stop animation
      clearInterval(animationInterval);
      timer.textContent = `Time: ${elapsedTime.toFixed(1)}s`;
      waterLevel.setAttribute('height', 0);
      
      // Re-enable button
      button.disabled = false;
      tankHeightInput.disabled = false;
      tankRadiusInput.disabled = false;
      holeRadiusInput.disabled = false;
      button.classList.remove('bg-gray-500');
      button.classList.add('bg-blue-500', 'hover:bg-blue-600');
      return;
    }
    
    // Update timer display
    timer.textContent = `Time: ${elapsedTime.toFixed(1)}s`;
    
    // Calculate new water level (linear decrease)
    const PercentLeft = ((Math.pow((Math.pow(tankHeight,1/2) - ((4*elapsedTime*Math.pow((holeRadius),2))/Math.pow(tankRadius,2))), 2))/tankHeight);
    newHeight = 226 * PercentLeft;
    waterLevel.setAttribute('height', newHeight);
    waterLevel.setAttribute('y', 31+(226-newHeight));
  }, 50); // Update every 50ms for smooth animation
});








let circularTankRadius = 2;
let circularHoleRadius = 1/100;

const circularTankRadiusInput = document.getElementById('circular-tank-radius');
const circularHoleRadiusInput = document.getElementById('circular-hole-radius');

circularTankRadiusInput.addEventListener('input', (e) => {
  circularTankRadius = parseFloat(e.target.value);
  console.log('Circular Tank Radius:', circularTankRadius);
});

circularHoleRadiusInput.addEventListener('input', (e) => {
  circularHoleRadius = parseFloat(e.target.value)/100;
  console.log('Circular Hole Radius:', circularHoleRadius);
});

document.getElementById('skip-circle').addEventListener('click', () => {
  const waterLevel = document.getElementById('circular-water-level');
  const timer = document.getElementById('circular-timer');

  
  timer.textContent = `Time: ${((14*Math.pow(circularTankRadius,5/2))/(15*Math.pow(circularHoleRadius,2)*Math.pow(20,1/2))).toFixed(1)}s`;
  waterLevel.setAttribute('height', 0);
}); 





// Render the KaTeX equations
katex.render("y' = xy", document.getElementById('equation1'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{dy}{dx}=g(x)f(y)", document.getElementById('equation1.2'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{1}{f(y)}dy=g(x)dx", document.getElementById('equation1.3'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\int\\frac{1}{f(y)}dy=\\int g(x)dx", document.getElementById('equation1.4'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{dh}{dt} = -\\frac{1}{72}\\sqrt{h}", document.getElementById('equation2'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{dh}{dt} = k\\sqrt{h}", document.getElementById('equation3'), {
  throwOnError: false,
  displayMode: true
});

katex.render("V=\\int_0^h A(x)\\space dx", document.getElementById('equation4'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{dV}{dt}=\\frac{dV}{dh}\\frac{dh}{dt}=A(h)\\frac{dh}{dt}", document.getElementById('equation5'), {
  throwOnError: false,
  displayMode: true
});

katex.render("A(h)\\frac{dh}{dt}=-a\\sqrt{2gh}", document.getElementById('equation6'), {
  throwOnError: false,
  displayMode: true
});

katex.render("(4h-h^2)\\frac{dh}{dt} = -0.0001\\sqrt{20h}", document.getElementById('equation7'), {
  throwOnError: false,
  displayMode: true
});

// Render values
katex.render("r = 2 \\text{ ft}", document.getElementById('value1'), {
  throwOnError: false,
  displayMode: true
});

katex.render("h = 6 \\text{ ft}", document.getElementById('value2'), {
  throwOnError: false,
  displayMode: true
});

katex.render("g = 32 \\text{ ft/s}^2", document.getElementById('value3'), {
  throwOnError: false,
  displayMode: true
});

katex.render("r_h = \\frac{1}{12} \\text{ ft}", document.getElementById('value4'), {
  throwOnError: false,
  displayMode: true
});

katex.render("h(0) = 6", document.getElementById('value5'), {
  throwOnError: false,
  displayMode: true
});

katex.render("h(t) = 0", document.getElementById('value6'), {
  throwOnError: false,
  displayMode: true
});

katex.render("h(0)=10", document.getElementById('value7'), {
  throwOnError: false,
  displayMode: true
});

katex.render("h(68)=3", document.getElementById('value8'), {
  throwOnError: false,
  displayMode: true
});

katex.render("r=10ft", document.getElementById('value9'), {
  throwOnError: false,
  displayMode: true
});

katex.render("d_o=\\frac{5}{24}ft", document.getElementById('value10'), {
  throwOnError: false,
  displayMode: true
});

katex.render("P(600s)\\geq2160\\frac{lb}{ft^2}", document.getElementById('value11'), {
  throwOnError: false,
  displayMode: true
});

katex.render("P=62.5d\\frac{lb}{ft^2}", document.getElementById('value12'), {
  throwOnError: false,
  displayMode: true
});

katex.render("r_t=2m", document.getElementById('value13'), {
  throwOnError: false,
  displayMode: true
});

katex.render("r_h=0.01m", document.getElementById('value14'), {
  throwOnError: false,
  displayMode: true
});

katex.render("g = 10\\space m/s^2", document.getElementById('value15'), {
  throwOnError: false,
  displayMode: true
});

// Render steps
katex.render("\\frac{dV}{dt} = -a\\sqrt{2gh}", document.getElementById('step1'), {
  throwOnError: false,
  displayMode: true
});

katex.render("V = \\pi r^2h", document.getElementById('step2'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{dV}{dt} = \\pi r^2\\frac{dh}{dt}", document.getElementById('step3'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{dV}{dt} = 4\\pi\\frac{dh}{dt}", document.getElementById('step4'), {
  throwOnError: false,
  displayMode: true
});

katex.render("4\\pi\\frac{dh}{dt} = -a\\sqrt{2gh}", document.getElementById('step5'), {
  throwOnError: false,
  displayMode: true
});

katex.render("4\\pi\\frac{dh}{dt} = -\\pi\\left(\\frac{1}{12}\\right)^2\\sqrt{2 \\cdot 32 \\cdot h}", document.getElementById('step6'), {
  throwOnError: false,
  displayMode: true
});

katex.render("4\\pi\\frac{dh}{dt} = -\\frac{4\\pi}{72}\\sqrt{h}", document.getElementById('step7'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{dh}{dt} = -\\frac{1}{72}\\sqrt{h}", document.getElementById('step8'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{1}{\\sqrt{h}} dh = -\\frac{1}{\\sqrt{72}} dt", document.getElementById('step1b'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\int\\frac{1}{\\sqrt{h}} dh = \\int-\\frac{1}{\\sqrt{72}} dt", document.getElementById('step2b'), {
  throwOnError: false,
  displayMode: true
});

katex.render("2\\sqrt{h}+c_1=-\\frac{t}{72}+c_2", document.getElementById('step3b'), {
  throwOnError: false,
  displayMode: true
});

katex.render("2\\sqrt{h}=-\\frac{t}{72}+c", document.getElementById('step4b'), {
  throwOnError: false,
  displayMode: true
});

katex.render("2\\sqrt{6}=-\\frac{0}{72}+c", document.getElementById('step5b'), {
  throwOnError: false,
  displayMode: true
});

katex.render("2\\sqrt{6}=c", document.getElementById('step6b'), {
  throwOnError: false,
  displayMode: true
});

katex.render("2\\sqrt{h}=-\\frac{t}{72}+2\\sqrt{6}", document.getElementById('step7b'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\sqrt{h}=-\\frac{t}{144}+\\sqrt{6}", document.getElementById('step8b'), {
  throwOnError: false,
  displayMode: true
});

katex.render("h=\\left(-\\frac{t}{144}+\\sqrt{6}\\right)^2", document.getElementById('step9b'), {
  throwOnError: false,
  displayMode: true
});

katex.render("0=\\left(-\\frac{t}{144}+\\sqrt{6}\\right)^2", document.getElementById('step1c'), {
  throwOnError: false,
  displayMode: true
});

katex.render("0=-\\frac{t}{144}+\\sqrt{6}", document.getElementById('step2c'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{t}{144}=\\sqrt{6}", document.getElementById('step3c'), {
  throwOnError: false,
  displayMode: true
});

katex.render("t=144\\cdot\\sqrt{6}", document.getElementById('step4c'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{1}{\\sqrt{h}} dh = k\\space dt", document.getElementById('step2a1'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\int\\frac{1}{\\sqrt{h}} dh =\\int k\\space dt", document.getElementById('step2a2'), {
  throwOnError: false,
  displayMode: true
});

katex.render("2\\sqrt{h}+c_1=kt+c_2", document.getElementById('step2a3'), {
  throwOnError: false,
  displayMode: true
});

katex.render("2\\sqrt{h}=kt+c", document.getElementById('step2a4'), {
  throwOnError: false,
  displayMode: true
});

katex.render("2\\sqrt{10}=k(0)+c", document.getElementById('step2a5'), {
  throwOnError: false,
  displayMode: true
});

katex.render("2\\sqrt{10}=c", document.getElementById('step2a6'), {
  throwOnError: false,
  displayMode: true
});

katex.render("2\\sqrt{3}=k(68)+2\\sqrt{10}", document.getElementById('step2a7'), {
  throwOnError: false,
  displayMode: true
});

katex.render("2\\sqrt{3}-2\\sqrt{10}=k(68)", document.getElementById('step2a8'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{2\\sqrt{3}-2\\sqrt{10}}{68}=k", document.getElementById('step2a9'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{\\sqrt{3}-\\sqrt{10}}{34}=k", document.getElementById('step2a10'), {
  throwOnError: false,
  displayMode: true
});

katex.render("2\\sqrt{h}=\\frac{\\sqrt{3}-\\sqrt{10}}{34}t+2\\sqrt{10}", document.getElementById('step2a11'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\sqrt{h}=\\frac{\\sqrt{3}-\\sqrt{10}}{68}t+\\sqrt{10}", document.getElementById('step2a12'), {
  throwOnError: false,
  displayMode: true
});

katex.render("h=\\left(\\frac{\\sqrt{3}-\\sqrt{10}}{68}t+\\sqrt{10}\\right)^2", document.getElementById('step2a13'), {
  throwOnError: false,
  displayMode: true
});

katex.render("h(10)=8.7,h(20)=7.5,h(30)=6.4,h(40)=5.4,h(50)=4.5,h(60)=3.6", document.getElementById('step2a14'), {
  throwOnError: false,
  displayMode: true
});

katex.render("h(10)=8.4,h(20)=6.9,h(30)=5.5,h(40)=4.5,h(50)=3.4,h(60)=2.6", document.getElementById('step2a15'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{dV}{dt} = -a\\sqrt{2gh}", document.getElementById('step3a1'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\pi r^2\\frac{dh}{dt} = -a\\sqrt{2gh}", document.getElementById('step3a2'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\pi (10)^2\\frac{dh}{dt} = -\\pi\\left(\\frac{5}{48}\\right)^2\\sqrt{2(32)h}", document.getElementById('step3a3'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{dh}{dt} = -\\frac{1}{1152}\\sqrt{h}", document.getElementById('step3a4'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\int\\frac{1}{\\sqrt{h}} dh = \\int-\\frac{1}{1152} dt", document.getElementById('step3a5'), {
  throwOnError: false,
  displayMode: true
});

katex.render("2\\sqrt{h}=-\\frac{t}{1152}+c", document.getElementById('step3a18'), {
  throwOnError: false,
  displayMode: true
});

katex.render("h=\\left(-\\frac{t}{2304}+c\\right)^2", document.getElementById('step3a6'), {
  throwOnError: false,
  displayMode: true
});

katex.render("P=62.5d\\frac{lb}{ft^2}", document.getElementById('step3a7'), {
  throwOnError: false,
  displayMode: true
});

katex.render("P(t)=h(t)62.5\\frac{lb}{ft^2}", document.getElementById('step3a8'), {
  throwOnError: false,
  displayMode: true
});

katex.render("h(600)62.5\\frac{lb}{ft^2}\\geq2160\\frac{lb}{ft^2}", document.getElementById('step3a9'), {
  throwOnError: false,
  displayMode: true
});

katex.render("h(600)\\geq\\frac{2160}{62.5}", document.getElementById('step3a10'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\left(-\\frac{600}{2304}+c\\right)^2\\geq\\frac{2160}{62.5}", document.getElementById('step3a11'), {
  throwOnError: false,
  displayMode: true
});

katex.render("c\\geq\\sqrt{\\frac{2160}{62.5}}+\\frac{600}{2304}", document.getElementById('step3a12'), {
  throwOnError: false,
  displayMode: true
});

katex.render("c\\geq 6.139", document.getElementById('step3a13'), {
  throwOnError: false,
  displayMode: true
});

katex.render("h(0)=\\left(-\\frac{0}{2304}+c\\right)^2", document.getElementById('step3a14'), {
  throwOnError: false,
  displayMode: true
});

katex.render("h(0)=c^2", document.getElementById('step3a15'), {
  throwOnError: false,
  displayMode: true
});

katex.render("c^2\\geq (6.139)^2", document.getElementById('step3a16'), {
  throwOnError: false,
  displayMode: true
});

katex.render("h(0)\\geq 37.69", document.getElementById('step3a17'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\pi r^2\\frac{dh}{dt}=-\\pi (0.01)^2\\sqrt{2(10)h}", document.getElementById('step4a1'), {
  throwOnError: false,
  displayMode: true
});

katex.render("r^2\\frac{dh}{dt}=-0.0001\\sqrt{20h}", document.getElementById('step4a2'), {
  throwOnError: false,
  displayMode: true
});

katex.render("h(0)=2", document.getElementById('step4a3'), {
  throwOnError: false,
  displayMode: true
});

katex.render("r^2+(h-2)^2=(2)^2", document.getElementById('step4a5'), {
  throwOnError: false,
  displayMode: true
});

katex.render("r^2=4-(h-2)^2", document.getElementById('step4a6'), {
  throwOnError: false,
  displayMode: true
});

katex.render("r^2=4-h^2+4h-4", document.getElementById('step4a7'), {
  throwOnError: false,
  displayMode: true
});

katex.render("r^2=-h^2+4h", document.getElementById('step4a8'), {
  throwOnError: false,
  displayMode: true
});

katex.render("(4h-h^2)\\frac{dh}{dt} = -0.0001\\sqrt{20h}", document.getElementById('step4a9'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{4h-h^2}{\\sqrt{h}}\\frac{dh}{dt} = -0.0001\\sqrt{20}", document.getElementById('step4b1'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{4h}{h^{1/2}}-\\frac{h^2}{h^{1/2}}\\frac{dh}{dt} = -0.0001\\sqrt{20}", document.getElementById('step4b2'), {
  throwOnError: false,
  displayMode: true
});

katex.render("4h^{1/2}-h^{3/2}dh = -0.0001\\sqrt{20}dt", document.getElementById('step4b3'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{8}{3}h^{3/2}-\\frac{2}{5}h^{5/2} = -0.0001\\sqrt{20}t+c", document.getElementById('step4b4'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{8}{3}(2)^{3/2}-\\frac{2}{5}(2)^{5/2} = -0.0001\\sqrt{20}(0)+c", document.getElementById('step4b5'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{56}{15}\\sqrt{2}=c", document.getElementById('step4b6'), {
  throwOnError: false,
  displayMode: true
});

katex.render("\\frac{8}{3}(0)^{3/2}-\\frac{2}{5}(0)^{5/2} = -0.0001\\sqrt{20}t+\\frac{56}{15}\\sqrt{2}", document.getElementById('step4b7'), {
  throwOnError: false,
  displayMode: true
});

katex.render("t\\approx 11806s", document.getElementById('step4b8'), {
  throwOnError: false,
  displayMode: true
});



// Tab switching functionality
const tabButtons = document.querySelectorAll('.tab-button')
const tabContents = document.querySelectorAll('.tab-content')
const questionButtons = document.querySelectorAll('.question-tab')
const questionContents = document.querySelectorAll('.question-content')

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'))
    tabContents.forEach(content => content.classList.remove('active'))
    
    // Add active class to clicked button and corresponding content
    button.classList.add('active')
    const tabId = button.getAttribute('data-tab')
    document.getElementById(tabId).classList.add('active')
  })
})

questionButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and contents
    questionButtons.forEach(btn => btn.classList.remove('active'))
    questionContents.forEach(content => content.classList.remove('active'))
    
    // Add active class to clicked button and corresponding content
    button.classList.add('active')
    const tabId = button.getAttribute('data-question')
    document.getElementById(tabId).classList.add('active')
  })
})