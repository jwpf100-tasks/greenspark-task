## Greenspark Interview Task

### Brief

- You can find a figma prototype here. Please make sure that you sign up/login to Figma, so you can investigate the design details. We also recommend to make a copy of the design for yourself
- You can fetch the product card details from https://getgreenspark.mocklab.io/products
- We would like you to implement the design using the product details by using a tech-stack of your choice, however we would like you to be proud of the quality of your final code and tests
- Although we don't have a strict requirement on the due date, finishing the homework should take only a few hours, so ideally we would like to see your solution within a week.
- Once you're done, please send us a link of your repository and a screenshot of your implemented design


### Comments

#### My Approach

For this project I've decided to use React and SCSS to replicate the design provided.  I felt that the design lent itself well to a framework like react, beacuse it was easily broken down into a number of reusale components. 
I used SCSS in this case because it lends itself quite well to component oriented programming and breaking the CSS down makes it easier to maintain in the future.   I made the checkbox, toggle, tooltip etc. with vanilla CSS/SCSS although in future I might suggest using a framework such as TailwindCSS in order to develop more quickly.  I would also consider styled-components which would make it easier with some components such as the color selector to style based on props rather than having to create multiple color classes.  
My development environment uses a custom boilerplate I've created that uses Vite as a bundler, this gives access to hot reloading which makes development easier.  I've also got ESLint and Prettier configured to make sure my code is correct and formatted.
Finally I've added basic typescript to the project to ensure that the correct data is being passed between components. 

The next thing I would work on for this project would be to make the design more responsive.  It is an exact match of the design provided, but will not display correctly on some screen sizes. 
I think there is scope to simplify my SCSS code further as well. 

### Instructions

The task is live at [https://josephfletcher.co.uk/greenspark/] or to run locally please follow the instructions below.

#### To Start Dev Server

- Clone repository 

- Run `npm run start` from command line

- The app will be running at [http://localhost:3000/greenspark/]
