export class UrlConstants {
    private constructor(){}
    public static baseAPIUrl = 'http://qaapi.zoomteams.com/api/';
    public static loginUrl = UrlConstants.baseAPIUrl.concat('Account/login?UserName={0}&Password={1}');
}