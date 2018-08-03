define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n	<head>\n		<title>"
    + alias4(((helper = (helper = helpers.page_title || (depth0 != null ? depth0.page_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page_title","hash":{},"data":data}) : helper)))
    + "</title>\n\n		<meta property=\"og:title\" content=\""
    + alias4(((helper = (helper = helpers.page_title || (depth0 != null ? depth0.page_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page_title","hash":{},"data":data}) : helper)))
    + "\" />\n		<meta property=\"og:description\" content=\""
    + alias4(((helper = (helper = helpers.page_description || (depth0 != null ? depth0.page_description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page_description","hash":{},"data":data}) : helper)))
    + "\" />\n		<meta property=\"og:url\" content=\""
    + alias4(((helper = (helper = helpers.page_url || (depth0 != null ? depth0.page_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page_url","hash":{},"data":data}) : helper)))
    + "\" />\n		<meta property=\"og:image\" content=\""
    + alias4(((helper = (helper = helpers.project_main_image || (depth0 != null ? depth0.project_main_image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_main_image","hash":{},"data":data}) : helper)))
    + "\" />\n\n		<meta name=\"viewport\" content=\"width=device-width\">\n\n		<link rel=\"stylesheet\" href=\"/assets/css/main.css\">\n		<link rel=\"shortcut icon\" href=\"/assets/img/favicon.ico\">\n		<link href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,400\" rel=\"stylesheet\">\n		\n		<!-- Global site tag (gtag.js) - Google Analytics -->\n		<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-122073426-1\"></script>\n		<script>\n		  window.dataLayer = window.dataLayer || [];\n		  function gtag(){dataLayer.push(arguments);}\n		  gtag('js', new Date());\n\n		  gtag('config', 'UA-122073426-1');\n		</script>\n\n	</head>\n	<body>\n\n"
    + ((stack1 = container.invokePartial(partials["@partial-block"],depth0,{"name":"@partial-block","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n	</body>\n\n</html>\n";
},"usePartial":true,"useData":true}); });