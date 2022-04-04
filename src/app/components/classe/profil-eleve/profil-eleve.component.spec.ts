import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEleveComponent } from './profil-eleve.component';

describe('ProfilEleveComponent', () => {
  let component: ProfilEleveComponent;
  let fixture: ComponentFixture<ProfilEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilEleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
