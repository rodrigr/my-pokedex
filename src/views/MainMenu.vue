<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col>
          <router-link to="/pokedex">
            <svg
              width="100px"
              height="100px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g id="g873">
                <path
                  id="path4"
                  d="M256,21.333c121.508,0,221.715,92.837,233.483,211.299c-17.362,3.845-61.466,11.878-127.904,12.608  c-5.484-53.704-50.452-95.908-105.579-95.908s-100.095,42.203-105.579,95.908c-66.438-0.73-110.542-8.763-127.904-12.608  C34.285,114.171,134.492,21.333,256,21.333z"
                  fill="currentColor"
                />
                <path
                  id="path8"
                  d="M256,490.667C126.604,490.667,21.333,385.396,21.333,256c0-0.596,0.086-1.171,0.09-1.766  c20.31,4.324,64.224,11.547,128.97,12.251c5.357,53.837,50.385,96.181,105.607,96.181s100.25-42.344,105.607-96.181  c64.746-0.704,108.66-7.927,128.97-12.251c0.004,0.595,0.09,1.169,0.09,1.766C490.667,385.396,385.396,490.667,256,490.667z"
                  fill="currentColor"
                />
                <circle
                  id="circle10"
                  r="64"
                  cy="256"
                  cx="256"
                  fill="currentColor"
                />
              </g>
            </svg>
          </router-link>
        </b-col>
        <b-col>
        <router-link to="/pokedex">
          <svg
            width="100px"
            height="100px"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="info-circle"
            class="svg-inline--fa fa-info-circle fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
            ></path>
          </svg>
        </router-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <router-link to="/pokedex">
            <svg
              width="100px"
              height="100px"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="address-card"
              class="svg-inline--fa fa-address-card fa-w-18"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"
              ></path>
            </svg>
          </router-link>
        </b-col>
      </b-row>

      
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "MainMenu",
};
</script>

<style>
.home a {
  color: #cc0000;
}
</style>
