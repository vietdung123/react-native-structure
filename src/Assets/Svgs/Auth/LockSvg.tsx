import { Colors } from '@/Theme';
import * as React from 'react';
import { scale } from 'react-native-size-scaling';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = ({ size = 24, color = Colors.black }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={scale(size)} height={scale(size)} viewBox="0 0 574.922 574.922">
    <Path
      fill={color}
      d="M491.102 238.031v-33.892c0-27.472-5.39-54.146-16.021-79.278-10.26-24.255-24.937-46.028-43.624-64.717-18.688-18.688-40.462-33.365-64.717-43.623C341.607 5.891 314.934.5 287.461.5s-54.146 5.391-79.279 16.021c-24.255 10.259-46.028 24.935-64.717 43.623-18.688 18.688-33.366 40.462-43.624 64.717-10.63 25.133-16.021 51.806-16.021 79.278v33.892c-29.34 2.925-52.328 27.753-52.328 57.85v220.4c0 32.059 26.082 58.141 58.14 58.141h395.657c32.059 0 58.141-26.082 58.141-58.141v-220.4c.001-30.097-22.988-54.924-52.328-57.85zM74.333 516.281v-220.4c0-6.391 3.921-11.865 9.489-14.154a15.26 15.26 0 0 1 5.812-1.146h395.658c2.058 0 4.02.409 5.812 1.146 5.567 2.289 9.488 7.763 9.488 14.154v220.4c0 8.451-6.85 15.301-15.3 15.301H89.633c-8.45 0-15.3-6.852-15.3-15.301zm52.329-312.142c0-88.807 71.993-160.799 160.8-160.799 88.807 0 160.8 71.993 160.8 160.799v33.602h-321.6v-33.602z"
    />
    <Path
      fill={color}
      d="M485.289 574.922H89.632c-32.334 0-58.64-26.306-58.64-58.641v-220.4c0-14.615 5.431-28.626 15.292-39.451 9.692-10.64 22.83-17.322 37.036-18.849V204.14c0-27.539 5.403-54.277 16.061-79.473 10.283-24.314 24.997-46.141 43.731-64.875 18.733-18.733 40.561-33.446 64.875-43.73C233.184 5.403 259.922 0 287.461 0s54.278 5.403 79.474 16.061c24.314 10.283 46.142 24.996 64.876 43.73 18.732 18.734 33.446 40.561 43.731 64.875 10.656 25.194 16.06 51.933 16.06 79.473v33.441c14.207 1.527 27.345 8.21 37.037 18.85 9.861 10.825 15.291 24.835 15.291 39.451v220.4c0 32.335-26.306 58.641-58.641 58.641zM287.461 1c-27.404 0-54.012 5.377-79.084 15.981-24.196 10.234-45.916 24.875-64.558 43.516-18.643 18.643-33.284 40.363-43.517 64.558-10.604 25.072-15.981 51.679-15.981 79.083v34.345l-.451.045c-14.132 1.409-27.218 8.005-36.846 18.575-9.693 10.64-15.031 24.412-15.031 38.777v220.4c0 31.783 25.857 57.641 57.64 57.641H485.29c31.783 0 57.641-25.857 57.641-57.641v-220.4c0-14.366-5.338-28.137-15.03-38.777-9.628-10.569-22.714-17.166-36.848-18.575l-.45-.045v-34.345c0-27.406-5.377-54.014-15.981-79.083-10.234-24.195-24.875-45.916-43.517-64.558-18.643-18.642-40.363-33.283-64.558-43.516C341.474 6.377 314.866 1 287.461 1zm197.83 531.082H89.633c-8.712 0-15.8-7.088-15.8-15.801v-220.4a15.751 15.751 0 0 1 9.799-14.616 15.713 15.713 0 0 1 6.001-1.183h395.658c2.072 0 4.091.398 6.002 1.183a15.753 15.753 0 0 1 9.798 14.616v220.4c0 8.713-7.088 15.801-15.8 15.801zm-395.658-251c-1.941 0-3.832.373-5.622 1.108a14.756 14.756 0 0 0-9.179 13.691v220.4c0 8.161 6.639 14.801 14.8 14.801H485.29c8.16 0 14.8-6.64 14.8-14.801v-220.4a14.756 14.756 0 0 0-9.179-13.691 14.722 14.722 0 0 0-5.621-1.108H89.633zm359.129-42.841h-322.6v-34.102c0-88.941 72.359-161.299 161.3-161.299s161.3 72.358 161.3 161.299v34.102zm-321.6-1h320.6v-33.102c0-88.389-71.91-160.299-160.3-160.299-88.39 0-160.3 71.91-160.3 160.299v33.102z"
    />
    <Path
      fill={color}
      d="M287.461 302.375c-34.337 0-62.272 27.936-62.272 62.273 0 26.639 16.816 49.422 40.388 58.299v49.068c0 5.18 1.838 9.93 4.898 13.635 3.928 4.756 9.871 7.787 16.521 7.787 6.609 0 12.518-2.996 16.447-7.701a21.332 21.332 0 0 0 4.973-13.721v-48.726c24.059-8.623 41.317-31.652 41.317-58.641.001-34.337-27.934-62.273-62.272-62.273zm0 81.707c-10.732 0-19.433-8.701-19.433-19.434s8.701-19.434 19.433-19.434 19.433 8.701 19.433 19.434-8.7 19.434-19.433 19.434z"
    />
    <Path
      fill={color}
      d="M286.997 493.938a21.86 21.86 0 0 1-16.907-7.969 21.956 21.956 0 0 1-5.013-13.953v-48.724c-24.171-9.257-40.388-32.779-40.388-58.644 0-34.613 28.16-62.773 62.772-62.773s62.773 28.16 62.773 62.773c0 26.31-16.59 49.972-41.317 58.991v48.376a21.947 21.947 0 0 1-5.089 14.041 21.874 21.874 0 0 1-16.831 7.882zm.464-191.063c-34.062 0-61.772 27.712-61.772 61.773 0 25.566 16.101 48.807 40.064 57.831l.324.122v49.414c0 4.852 1.699 9.581 4.784 13.316a20.866 20.866 0 0 0 16.136 7.605 20.879 20.879 0 0 0 16.063-7.521 20.943 20.943 0 0 0 4.856-13.4v-49.078l.331-.119c24.516-8.786 40.986-32.163 40.986-58.17.001-34.061-27.71-61.773-61.772-61.773zm0 81.707c-10.991 0-19.933-8.942-19.933-19.934s8.942-19.934 19.933-19.934 19.933 8.942 19.933 19.934-8.942 19.934-19.933 19.934zm0-38.867c-10.439 0-18.933 8.493-18.933 18.934s8.493 18.934 18.933 18.934 18.933-8.493 18.933-18.934-8.493-18.934-18.933-18.934z"
    />
  </Svg>
);

export default SvgComponent;
