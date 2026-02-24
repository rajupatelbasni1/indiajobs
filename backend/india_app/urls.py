from django.urls import path


# from .views import jobs_list , add_job , job_detail
from .views import latest_posts, post_list, post_detail

urlpatterns = [

    # path("jobs/", jobs_list),   # 👈 new API
    # path("add-job/", add_job),
    # path("jobs/<slug:slug>/", job_detail),
    
    path("posts/latest/", latest_posts),
    path("posts/", post_list),
    path("posts/<slug:slug>/", post_detail),
]


