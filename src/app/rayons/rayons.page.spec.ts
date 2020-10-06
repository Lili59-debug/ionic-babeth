import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RayonsPage } from './rayons.page';

describe('RayonsPage', () => {
  let component: RayonsPage;
  let fixture: ComponentFixture<RayonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RayonsPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(RayonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
