const Main = (props) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}
    <div className="mx-auto max-w-screen-md">Home Page of Template Section</div>
    <div className="content py-5 text-xl">{props.children}</div>
  </div>
);

export { Main };
