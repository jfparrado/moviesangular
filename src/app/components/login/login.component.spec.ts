import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from 'src/app/services/user.service';
import { Auth } from '@angular/fire/auth';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [
        UserService,
        { provide: Auth, useValue: {} }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia tener un formulario valido', () => {
    const email = component.formLogin.controls['email'];
    const password = component.formLogin.controls['password'];
  
    // Set values to the form controls
    email.setValue('test@example.com');
    password.setValue('123456');
  
    // Check if the form is valid
    expect(component.formLogin.valid).toBeTruthy();
  });
  
  it('Deberia tener un  formulario invalido cuando hay campos vacios', () => {
    const email = component.formLogin.controls['email'];
    const password = component.formLogin.controls['password'];
  
    // Clear values of the form controls
    email.setValue('');
    password.setValue('');
  
    // Check if the form is invalid
    expect(component.formLogin.valid).toBeFalsy();
  
    // Check if the form controls have the required error
    expect(email.errors?.['required']).toBeTruthy();
    expect(password.errors?.['required']).toBeTruthy();
  });
  
  it('Deberia tener un formulario invalido con un email invalido', () => {
    const email = component.formLogin.controls['email'];
    const password = component.formLogin.controls['password'];
  
    // Set values to the form controls
    email.setValue('invalid-email');
    password.setValue('123456');
  
    // Check if the form is invalid
    expect(component.formLogin.valid).toBeFalsy();
  
    // Check if the email control has the email error
    expect(email.errors?.['email']).toBeTruthy();
  });
  
  // Add more form validation tests if needed  
});
