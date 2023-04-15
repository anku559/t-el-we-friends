import ENV from '../variables.js';
import userAuthRoutes from './user.routes.js';
import friendRoutes from './friends.routes.js';
import followerRoutes from './follower.routes.js';
import postRoutes from './post.routes.js';
import commentRoutes from './comment.routes.js';

const apiVersionPrefix = ENV.API_PREFIX;

export default (app) => {
  app.use(`/${apiVersionPrefix}/user`, [
    userAuthRoutes,
    friendRoutes,
    followerRoutes,
    postRoutes,
    commentRoutes,
  ]);
};
