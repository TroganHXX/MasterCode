import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoadplanPage } from './roadplan.page';

describe('RoadplanPage', () => {
  let component: RoadplanPage;
  let fixture: ComponentFixture<RoadplanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadplanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoadplanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
