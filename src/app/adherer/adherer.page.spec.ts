import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdhererPage } from './adherer.page';

describe('AdhererPage', () => {
  let component: AdhererPage;
  let fixture: ComponentFixture<AdhererPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhererPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdhererPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
