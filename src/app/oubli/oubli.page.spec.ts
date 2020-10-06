import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OubliPage } from './oubli.page';

describe('OubliPage', () => {
  let component: OubliPage;
  let fixture: ComponentFixture<OubliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OubliPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OubliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
