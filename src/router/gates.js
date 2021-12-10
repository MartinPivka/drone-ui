/**
 * Returns a router gate that sets the default parameters
 * for the stage and step if undefined.
 */
export const defaultParams = (to, from, next) => {
  const { name, params } = to;

  switch (name) {
    case "step":
    case "build":
      params.stage = params.stage || "1";
      params.step = params.step || "1";
  }

  next();
};

/**
 * Authorizer returns a router gate that requires user
 * authentication to access restricted routes. If the
 * user is not authenticated, they are redirected to
 * the login page.
 *
 * @param {*} store
 * @param {*} window
 */
export const authorizer = (store, window) => (to, from, next) => {
  // require authentication to access certain
  // routes. If the user is not authenticated,
  // redirect to login.
  if (to.meta && to.meta.requiresAuth && !store.getters.userPresent) {
    window.location.href = "/login";
  } else {
    // proceed to the next guard.
    next();
  }
};

export const accesser = (store, window) => (to, from, next) => {
  // allow access only to specific routes
  const isRoot = store.state.user.data.admin;
  if (to.meta && to.meta.onlyRoot && !isRoot) {
    // no access if not root
    next("/no-access");
  } else {
    // proceed to the next guard.
    next();
  }
};
