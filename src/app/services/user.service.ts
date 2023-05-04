import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
// import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private auth: Auth, private cookieService: CookieService) { }
  
  getHeaders(){
    const token = this.cookieService.get('jwt');
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return headers
  }
  
  register({email,password}:any){
    return createUserWithEmailAndPassword(this.auth, email, password)
  }
  
  async setUpCookies(userCredential:any) {
    const token = await userCredential.user.getIdToken();
    const expirationDate = new Date();

    expirationDate.setDate(expirationDate.getDate() + 1);
    this.cookieService.set('jwt', token, expirationDate);
  }
  
  async login({email,password}:any){
    const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
    await this.setUpCookies(userCredential)
  }
  
  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(this.auth, provider);
    await this.setUpCookies(userCredential)
  }
  
  logout(){
    this.cookieService.delete('jwt');
    return signOut(this.auth);
  }

  isLoggedIn(): boolean {
    return this.auth.currentUser !== null;
  }

  async refreshFirebaseToken(): Promise<string | null> {
    const currentUser = this.auth.currentUser;
    if (!currentUser) {
      return null;
    }
    
    const token = await currentUser.getIdTokenResult();
    console.log("token:",token);
    const tokenExpired = new Date(token.expirationTime) < new Date();
    console.log("tokenExpired:",tokenExpired);
    
    if (tokenExpired) {
      const newToken = await currentUser.getIdToken();
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 1);
      this.cookieService.set('jwt', newToken, expirationDate);
      return newToken;
    } else {
      return token.token;
    }
  }
}
