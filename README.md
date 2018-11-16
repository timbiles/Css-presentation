# Styling Presentation
Different style variations on the same page. This is meant as a comparison of styles for javascript development.

1. **[CSS](#CSS)**
2. **[SASS](#SASS-(Preprocessor))**
3. **[CSS Modules](#CSS-Modules)**
4. **[Styled Components](#Styled-Components)**
5. **[Inline](#Inline)**
6. **[Style Guidelines](#Style-Guidelines)**
7. **[Interview Prep](#CSS-Interview-Prep)**
8. **[Further Reading](#Further-Reading)**


## CSS

### Syntax
Define variables (accessible in any file)
    

```
:root {
    --header-color: #05FF01;
    --header-font: #015900;
}
```

  - CSS Shorthand
    

```
    font-style: italic;
    font-weight: bold;
    font-size: .8em;
    line-height: 1.2;
    font-family: Arial, sans-serif;
```
   This can be shortened to ...
```
    font: italic bold .8em/1.2 Arial, sans-serif;
```

#### Advantages
   - Nothing new. For most developers, it is how they learned first.
   - Nothing to install, very little set up (just import).
   - Shorthand
   - Can delcare variables

#### Disadvantages
   - Different files
   - No interaction with Javascript. 
   - Can easily be cluttered.

## SASS (Preprocessor)

### Syntax
   An extention of CSS. CSS-compatable syntax.
   Offers Features not available in plain CSS.

   - Install node-sass
   - append .scss to the stylesheet.

   - Define Variables (accessible in current file)
   
```
$headerColor: #05ff01;

nav {
    background: $headerColor;
}
```


   - Nest inside selectors
```
.header {
  display: flex;
  justify-content: center;
  width: 100vw;
  img {
    height: 60px;
    border-radius: 50%;
    margin-right: 2%;
  }
  .sub_header {
      background: green;
      height: 5vh;
      width: 15vw;
  }
}
```
   Though this does not really condense the file, it makes for much better organization.

   - Mixins
```
@mixin flex {
  display: flex;
  align-items: center;
}

.nav {
  @include flex;
}
```
   If you have repetative combinations, this can save you time. You can also pass in arguments. 

```
@mixin grid($flex) {
    @if $flex {
        @include flex;
    } @else {
        display: block;
    }
}

.nav {
    @include grid(true);
}
```
   Using an if/else statement, you can define the display of a div dynamically. You can also pass in as many css identifiers as you want.

   Check out this article to learn more cool SASS mixins.
   https://engageinteractive.co.uk/blog/top-10-scss-mixins

    

#### Advantages
   - Large community
   - Nesting for better organization.
   - Use of mixins
   - Dry code
   - Commenting in Sass is SO MUCH BETTER THAN CSS

#### Disadvantages
   - Package needs to be installed
   - Same as css (different files, no js interaction) 

#### .sass vs .scss
   - .scss is written identical to .css
   - .sass needs specific indention

#### Other Preprocessors
   - Less syntax is identical, minor differences.
   - Stylus syntax does not use curly braces of semi-colons.
   - Both share syntax with CSS.

### Resources

#### Sass Guidelines
   https://sass-guidelin.es/

#### Sass best practices
   https://medium.com/@mciastek/s-css-best-practices-that-you-have-not-yet-known-ba2f6329b5dd

## CSS Modules

   CSS Modules allows you to compartmentalize style sheets, and gives unique names to classes (classNames).

   - Create styles file (make sure to append .module.css to the end)
   - import files as ...
    
```js
import styles from '../modules.module.css';
```

   - Call the classNames in curly braces as ...
    
```js
<div className={styles.header}>
</div>
```

   This process guarantees that there are no hiding styles coming from other components. It also places all the styles for a component in one place.

#### Advantages
   - Compartmentalizes styles (Locally scoped by default)
   - Creates unique identifiers.
   - Set up is easy (just remember .module.css)

#### Disadvantages
   - Still in separate files.
   - No reusable styles between pages/components

### Resources

#### CSS Modules By Example
   https://www.javascriptstuff.com/css-modules-by-example/

#### Getting started with CSS Modules
   https://blog.pusher.com/css-modules-react/
    

## Styled Components

   CSS in JS is regarded as a better way to style components in React. With Styled Components, CSS syntax stays the same with a few set-up adjustments.

### Syntax

   - Install styled-components
   - import ...
   
```js
import styled from 'styled-components';
```
   If keyframes of css is needed, destructure that like ...
   
```js
import styled, { keyframes } from 'styled-components';
```

   - Create a Component. use styled. whatever you are creating (div, p, h2, span). Wrap the CSS in back-ticks (Written exactly the same as CSS here)
   
```js
const Nav = styled.div`
    display: flex;
    justify-content: space-evenly;
    background: #fff;
    color: #000;
`

<Nav>
</Nav>
```

   - You can pass in props for dynamic Components and reusability. 

```js
const Button = styled.button`
    width: 30px;
    height: 15px;
    background: {props => props.primary ? 'transparent' : 'blue'};
    color: #000
`

<Button>
Click me
</Button>
<Button primary>
Click me first
</Button>
```

   You can also pass a grouping of props like so...
   
```js
const Paragraph = styled.p`
    font-size: 1em;

    ${props => props.primary && css`
        background: #015900;
        color: #05ff01;
    `}
`
```
   Don't forget to bring in css descructured from the import.

   - Using animations
   
```js
const Rotate = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`;


const Wrapper = styled.div`
    display: flex;
    width: 50vw;
    height: 25vh;
    animation: ${Rotate} 2s;
`
```

   - Passing in Psuedo elements just go inside the backticks.
   
```js
const Burger = styled.div`
    height: 0.5px;
    border: 1px solid #fff;
    border-radius: 25%;
    background-color: #fff;
    margin: 2px 0;
    width: ${props => props.width};

    ${BurgerWrapper}:hover & {
      transform: scale(1.05)        
    }${BurgerWrapper}:active & {
      transform: scale(.97)        
    }
`


<Burger width="30px" />
```

   If this gets cluttered in a single component, you can export them from their own styles folder. Just say ...

```
export const Wrapper. . .
```
   Don't forget to import styles in the top of that javascript file.

#### Advantages
   - Interaction with Js file
   - Reusability, can change depending on props.
   - Removes the overuse of classNames, removing name conflicts.
   - Removing Style sheet saves on performance (if kept in one file)

#### Disadvantages
   - Syntax is almost identical to CSS, but flow of logic needs to be learned.


### Resources

#### Documentation
   https://www.styled-components.com/

#### 5 minute intro to Styled Components
   https://medium.freecodecamp.org/a-5-minute-intro-to-styled-components-41f40eb7cd55

#### Styled Components in Action
   https://hackernoon.com/styled-components-in-action-723852f2a93d


## Inline
   - Don't do it. 

## Style Guidelines

#### Material Design
   https://material.io/design/layout/understanding-layout.html#

#### Style Guides.io
   http://styleguides.io/

#### CSS High-level guidelines
   https://cssguidelin.es/


## CSS Interview Prep

#### 20 Most Helpful CSS Interview Questions
   https://www.goskills.com/Development/Articles/CSS-interview-questions-answers
#### 5 Essential CSS Interview Questions
   https://www.toptal.com/css/interview-questions
#### CSS Interview Questions
   https://www.tutorialspoint.com/css/css_interview_questions.htm



## Further Reading

#### B.E.M 
   Block Element Modifier
   http://getbem.com/

#### Less
   http://lesscss.org/
#### Stylus
   http://stylus-lang.com/
