import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService, IWork } from '../shared.service';
import { UserService } from '../user.service';
import { Subject } from "rxjs/Subject";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent implements OnInit, OnDestroy
{
  unsubcribe: Subject<void> = new Subject<void>();
  workId: string;
  work: IWork = 
  {
    work_count: "",
    id: "",
    author_id: "",
    author_name: "",
    author_surname: "",
    title: "",
    category: "",
    year: "",
    description: "",
    price: "",
    active: true,
    thumbnail_url: "",
    picture_url: "",
    thumbnail_name: "",
    picture_name: ""
  };
  errorMessage: string;
  loading = true;

  constructor(public sharedService: SharedService, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() 
  {
    this.activatedRoute.params.subscribe(params =>
    {
      this.workId = params["id"];
      this.GetWorkInfo(this.workId);
    });
  }

  ngOnDestroy()
  {
    this.unsubcribe.next();
    this.unsubcribe.complete();
  }

  public GetWorkInfo(id: string)
  {
    this.sharedService.GetOneWork(id).takeUntil(this.unsubcribe).subscribe
    (
      data =>
      {
        this.work = data;
        window.scrollTo(0, 0);
      },
      error =>
      {
        this.errorMessage = error.message;
      }
    );
  }

  public ImageLoaded()
  {
    this.loading = false;
  }

}
