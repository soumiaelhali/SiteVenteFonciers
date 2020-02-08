import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublierAnnonceComponent } from './publier-annonce.component';

describe('PublierAnnonceComponent', () => {
  let component: PublierAnnonceComponent;
  let fixture: ComponentFixture<PublierAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublierAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublierAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
