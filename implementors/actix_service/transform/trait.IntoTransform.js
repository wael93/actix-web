(function() {var implementors = {};
implementors["actix_web"] = [{text:"impl&lt;S, B&gt; IntoTransform&lt;<a class=\"struct\" href=\"actix_web/middleware/cors/struct.CorsFactory.html\" title=\"struct actix_web::middleware::cors::CorsFactory\">CorsFactory</a>, S&gt; for <a class=\"struct\" href=\"actix_web/middleware/cors/struct.Cors.html\" title=\"struct actix_web::middleware::cors::Cors\">Cors</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Service&lt;Request = <a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>, Response = <a class=\"struct\" href=\"actix_web/dev/struct.ServiceResponse.html\" title=\"struct actix_web::dev::ServiceResponse\">ServiceResponse</a>&lt;B&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Error: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: 'static,&nbsp;</span>",synthetic:false,types:["actix_web::middleware::cors::Cors"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
