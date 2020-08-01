import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThingsPage } from './things.page';

describe('ThingsPage', () => {
  let component: ThingsPage;
  let fixture: ComponentFixture<ThingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
