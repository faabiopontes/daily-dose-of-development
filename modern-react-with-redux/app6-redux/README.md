# Redux App

On this app we are looking at how Redux works and developing and app to consolidate our learnings about it

## App Steps
1. Story (analogy) to help us understand Redux
2. Write some code with Redux only
3. Develop our React App
4. Understand how to integrate React with Redux

## What Does React Help Us With?
- Rendering content to the screen
- Handling user interactions

## What is Redux?
- State management library
- Makes creating complex applications easier
- Not required to create a React app!
- Not explicitly designed to work with React!

## Redux Cycle
1. Action Creator
2. Action
3. dispatch
4. Reducers
5. State

## Insurance Company Analogy

We gonna go through a story to helps us understand the Redux workflow better

### Insurance Terms
- policy: Customer holds a 'policy', if bad stuff happens to them then we pay them
- claim: Customer had something bad happen to them, we need to pay them

### Insurance Co Departments
- Claims History: Stores a list of all claims ever made
- Policies: Stores a list of who has a policy with our insurance company
- Accounting: Stores a big bag of cash, we pay people from this

### Story
- Customer fills a Form and hands to the Form Receiver at Insurance Co
- Form Receiver prints copies of the form and handles to all three different departments of the company