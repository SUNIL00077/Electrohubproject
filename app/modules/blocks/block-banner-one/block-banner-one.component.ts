import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-block-banner-one',
  templateUrl: './block-banner-one.component.html',
  styleUrls: ['./block-banner-one.component.scss']
})
export class BlockBannerOneComponent implements OnInit {

  allCardData = [
    {image_url :"../assets/images/block_module/eye.jfif",image_name:"hello",image_info:'isifhsefhhffoab'},
    {image_url :"../assets/images/block_module/eye.jfif",image_name:"hello",image_info:'isifhsefhhffoab'},
    {image_url :"../assets/images/block_module/eye.jfif",image_name:"hello",image_info:'isifhsefhhffoab'},
    {image_url :"../assets/images/block_module/eye.jfif",image_name:"hello",image_info:'isifhsefhhffoab'},
    {image_url :"../assets/images/block_module/eye.jfif",image_name:"hello",image_info:'isifhsefhhffoab'},
    {image_url :"../assets/images/block_module/eye.jfif",image_name:"hello",image_info:'isifhsefhhffoab'},
    {image_url :"../assets/images/block_module/eye.jfif",image_name:"hello",image_info:'isifhsefhhffoab'},
    {image_url :"../assets/images/block_module/eye.jfif",image_name:"hello",image_info:'isifhsefhhffoab'},
    {image_url :"../assets/images/block_module/eye.jfif",image_name:"hello",image_info:'isifhsefhhffoab'},
    {image_url :"../assets/images/block_module/eye.jfif",image_name:"hello",image_info:'isifhsefhhffoab'},
    {image_url :"../assets/images/block_module/eye.jfif",image_name:"hello",image_info:'isifhsefhhffoab'},
  
  ]
  constructor( private router:Router) { }
  ngOnInit(): void {
  }
  goToLogin(){
    this.router.navigateByUrl("/account")
  }
}
