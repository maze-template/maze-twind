/** @jsx h */
import { Component, Fragment, h, Helmet } from "nano-jsx";
import { PageProps } from "maze";

export default class Home extends Component<PageProps> {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Hello Home Page</title>
        </Helmet>
        <div class="bg-white flex justify-center h-screen">
          <div>
            <div class="text-center mt-20 mb-10 text-gray-600">
              <h3 class="text-5xl">
                Welcome Home Page
              </h3>
              <p>Try to modify file: /pages/index.tsx</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
