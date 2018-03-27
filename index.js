const React = {
  createElement(tagName, property, children) {

    const element = document.createElement(tagName);

    if (property && property.textContent){
      element.textContent = property.textContent;
    }

    if (property && property.style){
      for (let key in property.style) {
        element.style[key] = property.style[key];
      }
    }

    if (children && Array.isArray(children)) {
      children.forEach((item) => {
        (!!item.nodeType) ? element.appendChild(item) : element.appendChild(document.createTextNode(item));
      });
    }
    if (children && !Array.isArray(children)) {
      element.appendChild(document.createTextNode(children));
    }
    return element;
  },

  render(element, rootElement) {
    rootElement.appendChild(element);
  },
}

const app =
  React.createElement('div', { style: { backgroundColor: 'red' } }, [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', { textContent: 'Text content' }),
  ]);

React.render(
  app,
  document.getElementById('root'),
);