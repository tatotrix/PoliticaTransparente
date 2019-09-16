const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Partidos.vue") },
      {
        path: "/sobre",
        name: "sobre",
        component: () => import("pages/Sobre.vue")
      },
      {
        path: "/deputados/:id",
        name: "deputados",
        component: () => import("pages/Deputados.vue"),
        params: true
      },
      {
        path: "/partidos",
        name: "partidos",
        component: () => import("pages/Partidos.vue")
      },
      {
        path: "/deputadosdespesas/:id",
        name: "deputadosdespesas",
        component: () => import("pages/DeputadosDespesas.vue"),
        params: true
      }
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
