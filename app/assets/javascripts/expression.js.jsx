$(function () {
  var root = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;
  window.Link = ReactRouter.Link;

  var App = React.createClass({
    render: function () {
      return (
        <div>
          <Navbar />
          {this.props.children}
        </div>
      );
    }
  });

  var routes = (
        <Route path="/" component={App}>
          <IndexRoute component={LandingPage}/>
          <Route path="users/:id" component={UserPage}></Route>
          <Route path="stories/new" component={StoryForm}></Route>
        </Route>
      );

    React.render(<Router>{routes}</Router>, root)
});
