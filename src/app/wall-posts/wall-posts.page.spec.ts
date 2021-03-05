import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WallPostsPage } from './wall-posts.page';

describe('WallPostsPage', () => {
  let component: WallPostsPage;
  let fixture: ComponentFixture<WallPostsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WallPostsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WallPostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
