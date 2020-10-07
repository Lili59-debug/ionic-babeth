import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuiPage } from './qui.page';

describe('QuiPage', () => {
  let component: QuiPage;
  let fixture: ComponentFixture<QuiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
