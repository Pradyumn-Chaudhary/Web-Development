# Built-in React Hooks

React Hooks let you use various React features in functional components. You can use the built-in Hooks or combine them to create your own custom Hooks. Below is a comprehensive list of React's built-in Hooks.

---

## **State Hooks**

State Hooks allow components to “remember” information such as user inputs or application states.

### **`useState`**
Declares a state variable that you can update directly.

```javascript
function ImageGallery() {
  const [index, setIndex] = useState(0);
  // ...
}
```

### **`useReducer`**
Declares a state variable with its update logic inside a reducer function.

---

## **Context Hooks**

Context Hooks allow components to access data from distant parents without prop-drilling.

### **`useContext`**
Reads and subscribes to a context.

```javascript
function Button() {
  const theme = useContext(ThemeContext);
  // ...
}
```

---

## **Ref Hooks**

Ref Hooks hold information that isn’t used for rendering, such as DOM nodes or IDs. Updating refs doesn’t trigger re-renders.

### **`useRef`**
Declares a ref to hold any value, often a DOM node.

```javascript
function Form() {
  const inputRef = useRef(null);
  // ...
}
```

### **`useImperativeHandle`**
Customizes the ref exposed by a component. This is rarely used.

---

## **Effect Hooks**

Effect Hooks connect components to external systems or synchronize with external code like APIs, the DOM, or animations.

### **`useEffect`**
Runs side effects after rendering.

```javascript
function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  // ...
}
```

#### Rare Variations:
- **`useLayoutEffect`**: Fires before the browser repaints the screen, useful for measuring layouts.
- **`useInsertionEffect`**: Fires before React updates the DOM, often used to insert dynamic CSS.

---

## **Performance Hooks**

Performance Hooks optimize rendering by caching results or functions and skipping unnecessary updates.

### **`useMemo`**
Caches the result of an expensive computation.

```javascript
function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
```

### **`useCallback`**
Caches a function definition for optimized components.

```javascript
const memoizedCallback = useCallback(() => {
  doSomething();
}, [dependency]);
```

### **`useTransition`**
Marks a state update as non-blocking, allowing other updates to interrupt it.

### **`useDeferredValue`**
Defers updating a non-critical part of the UI until more critical updates complete.

---

## **Other Hooks**

These Hooks are useful for advanced use cases, such as creating libraries or tools.

### **`useDebugValue`**
Customizes the label displayed in React DevTools for custom Hooks.

### **`useId`**
Associates a unique ID with a component, useful for accessibility.

### **`useSyncExternalStore`**
Subscribes a component to an external store.

### **`useActionState`**
Manages the state of actions.

---

## **Your Own Hooks**

You can define custom Hooks as JavaScript functions by combining other Hooks. This helps in reusing logic across multiple components.

```javascript
function useCustomHook(initialValue) {
  const [value, setValue] = useState(initialValue);

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  return [value, updateValue];
}
```

---

