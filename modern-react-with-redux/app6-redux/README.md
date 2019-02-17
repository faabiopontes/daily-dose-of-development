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
1. Action Creator (Person dropping of the form)
2. Action (Form)
3. dispatch (Form Receiver)
4. Reducers (Departments)
5. State (Compiled department data)

## Insurance Company Analogy
We gonna go through a story to helps us understand the Redux workflow better

### Insurance Terms
   - policy: Customer holds a 'policy', if bad stuff happens to them then we pay them
   - claim: Customer had something bad happen to them, we need to pay them

### Insurance Co Departments
  - Claims History: Stores a list of all claims ever made
  - Policies: Stores a list of who has a policy with our insurance company
  - Accounting: Stores a big bag of cash, we pay people from this

### Form Content
  - Type: Action que Form intends to execute
  - Payload: With data related to the intent of the Form

### Types of Forms
  - CREATE POLICY
  - CREATE CLAIM
  - DELETE POLICY

### Story
- Customer fills a Form and hands to the Form Receiver at Insurance Co
- Form Receiver prints copies of the form and handles to all three different departments of the company
- Management team knocks at the Policies Department to ask who has a policy right now
- Over time management gets frustated to have to know on the Policies Department to know who has a policy
- The Policies Department the start to send it's policies to a Central Repository of Data
- The Central Repository of Data then sends the form to the Policies Department when it receives a new Form
- The Policies Department then sends the updated policies back again to the Central Repository of Data
- Every different type of Form has a different information in it's payload
- Every Department does a different thing with each Type of Form
- Every Department receives data from the Central Repository of Data
- The department might then change this data and return it to the Central Repository of Data