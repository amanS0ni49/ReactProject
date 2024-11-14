const parent = React.createElement("div", {}, React.createElement("div", {}, [React.createElement("h1", {}, "hello React"
), React.createElement("h2", {}, "h2 react")]))
const heading  = React.createElement("h1", {id: "heading"}, "Hello from react") 
const root = ReactDOM.createRoot(document.getElementById("root")) 
root.render(parent)

//What if we have multiple childs the structure will be complex so we use jsx which only makes our life easy