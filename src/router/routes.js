const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      {
        path: "", component: () => import("pages/Landing.vue")
      },
      {
        path: "search", component: () => import("pages/Search.vue")
      }
    ]
  },
  { path: "/product",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      {
        path: "", component: () => import("pages/Product.vue")
      },
      {
        path: "new", component: () => import("pages/Search.vue")
      },
      {
        path: ":id", component: () => import("pages/Product.vue")
      }
    ] 
  },
  {
    path: "/search",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      {
        path: "", component: () => import("pages/Search.vue")
      },
    ]
  },
  {
    path: "/signup",
    component: () => import("layouts/Auth.vue"),
    children: [
      {
        path: "", component: () => import("pages/Signup.vue")
      },
    ]
  },
  {
    path: "/login",
    component: () => import("layouts/Auth.vue"),
    children: [
      {
        path: "", component: () => import("pages/Login.vue")
      },
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
