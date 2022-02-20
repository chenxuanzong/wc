class MyElement extends HTMLElement {
  constructor() {
    super();

    console.log('初始化');
  }

  // static get observedAttributes() {
  //   return ['text'];
  // }

  // 当自定义元素首次被插入文档 DOM 时被调用
  // connectedCallback() {
  //   console.log('已连接到 dom');
  // }

  // 当自定义元素从文档 DOM 中删除时被调用
  // disconnectedCallback() {
  //   console.log('从 dom 中移除');
  // }

  // 自定义元素增加、删除、修改自身属性时被调用
  // attributeChangedCallback(
  //   name: string,
  //   oldValue: null | string,
  //   newValue: null | string
  // ) {
  //   console.log({
  //     name,
  //     oldValue,
  //     newValue,
  //   });
  // }

  // 自定义元素被移动到新的文档时被调用
  // adoptedCallback(oldDocument: Document, newDocument: Document) {
  //   console.log(
  //     `从 ${oldDocument.documentURI} 移至 ${newDocument.documentURI}`
  //   );
  // }
}

// define 方法
customElements.define('my-element', class extends HTMLElement {});
// customElements.define('my-element', MyElement);

// get 方法
// console.log(customElements.get('my-element') === MyElement);

// whenDefined 方法
// customElements.whenDefined('my-element').then(() => {
//   console.log('已定义完成');
// });

// 属性发生变化
// setTimeout(() => {
//   const myElement = document.getElementsByTagName('my-element')[0];

//   myElement.setAttribute('text', 'hello');
// }, 1000);

// 移除自定义元素
// setTimeout(() => {
//   const myElement = document.getElementsByTagName('my-element')[0];

//   document.body.removeChild(myElement);
// }, 1000);

// 移动自定义元素
// setTimeout(() => {
//   const iframe = document.getElementById('frame') as HTMLIFrameElement;
//   const myElement = document.getElementsByTagName('my-element')[0];

//   iframe?.contentDocument?.body.appendChild(myElement);
// }, 1000);
