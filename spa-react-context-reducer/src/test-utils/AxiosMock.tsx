import { useEffect } from "react";
import MockAdapter from "axios-mock-adapter";
import { axiosInstance } from "../apis/axios-instance";

interface IProps {
  children: any;
  mock: (adapter: MockAdapter) => void;
}

const axiosMock = new MockAdapter(axiosInstance);

/**
 * StoryBookのstoriesでaxios mock adapterを利用するためのコンポーネント
 * Usage:
   ```
   export const Default = () => {
    const mock = (axiosMock: MockAdapter) => {
      axiosMock.onGet('/api/meetings/1').reply(200, {
        id: 1,
        title: 'A Meeting',
      });
    };
    return (
      <AxiosMock mock={mock}>
        <Meeting />
      </AxiosMock>
    );
  };
  ```
 * @param children axios mock adapterを適用したいコンポーネント
 * @param mock モックの内容を定義するメソッド
 * @see https://gist.github.com/rafaelrozon/ed86efbea53094726e162dc05882cddc
 */
function AxiosMock({ children, mock }: IProps) {
  useEffect(() => {
    mock(axiosMock);
    return () => {
      axiosMock.reset();
    };
  });
  return children;
}

export default AxiosMock;
