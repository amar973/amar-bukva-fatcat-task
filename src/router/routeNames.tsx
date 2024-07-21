const generateRoute = (
    unsafeRoute: string,
    params: Record<string, string | null> = {}
) => {
    let route = unsafeRoute;
    Object.keys(params).forEach((key) => {
        if (!params[key]) route = route.replace(`/:${key}`, '');
        else route = route.replace(`:${key}`, params[key] as string);
    });

    return route;
};
const routeNames = {
    root: (params?: Record<string, string>): string =>
        generateRoute('/', params),
    userPage: (params?: Record<string, string>): string =>
        generateRoute('/user/:id', params),
};

export default routeNames;
