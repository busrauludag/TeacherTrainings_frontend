import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{
  // çalışabilmesi için HttpInterceptor interface'ini implement etmesi gerekiyor
  // yapacağımız her isteğin başına token'ı eklemiş oluruz bunun için app.module'de providers'a eklenir

  constructor(private injector:Injector) { }  // başka bir servis inject etmek için kullanabiliriz

  // implemente etmesi gereken metot
  intercept(request, next){
    // request yapılan istek, next sonraki adım. middleware gibi çalışıyor
    var authService = this.injector.get(AuthService);  // servisi inject ediyoruz

    var authRequest = request.clone({
      headers: request.headers.set('authorization', 'token '+authService.token)
    })
    return next.handle(authRequest);
  }
}
