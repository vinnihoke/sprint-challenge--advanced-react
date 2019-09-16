- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components are very powerful and can contain state as well as methods for use throughout your project.

- [ ] Name three lifecycle methods and their purposes.

componentWillMount: The first called in the mounting phase. It’s invoked once and immediately before the initial rendering occurs, hence before React inserts the component into the DOM.

componentDidMount: The second invoked in the mounting phase, just once and immediately after React inserts the component into the DOM.

componentDidUpdate: Is called immediately after React updates the DOM. We can use this method to interact with the updated DOM or perform any action post-render.

- [ ] What is the purpose of a custom hook?

For repeatable scripts you can use a custom hook that will execute code that handles a specific task. For instance, if you needed to make several database calls you could simply create a useFetch, or useAxios hook that would do this for you. This helps keep our code modular.

- [ ] Why is it important to test our apps?

When it works, testing can help you identify issues with your code and notice larger underlying issues. You could catch an error before your code hits the market. It also helps if you require specific results from a function. If your tests aren't returning the proper value, then there is a problem with the function. They can be repeatable, and be used in a variety of situations. Automated testing minimizes the risk of bugs finding their way into production code. Testing is NOT optional, it should be a part of every developer’s workflow.
