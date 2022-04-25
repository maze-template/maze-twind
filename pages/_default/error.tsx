/** @jsx h */
import { Fragment, h, Helmet } from "nano-jsx";

export default function ErrorPage(
  { message = "something went wrong", status = 500 }: {
    message: string;
    status: number;
  },
) {
  return (
    <Fragment>
      <Helmet>
        <title>{status} {message}</title>
      </Helmet>
      <div class="flex justify-center w-full h-screen bg-white dark:bg-gray-800">
        <div class="px-40 py-20 rounded-md">
          <div class="flex flex-col items-center">
            <h1 class="font-bold text-blue-600 text-9xl">{status}</h1>
            <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl dark:text-white">
              <span class="text-red-500">Oops!</span> Error
            </h6>
            <p class="mb-8 text-center text-gray-500 md:text-lg  dark:text-white">
              {message}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
