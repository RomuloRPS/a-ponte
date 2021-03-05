import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecentPostsPage } from './recent-posts.page';

describe('RecentPostsPage', () => {
  let component: RecentPostsPage;
  let fixture: ComponentFixture<RecentPostsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecentPostsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecentPostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
