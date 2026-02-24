# from django.shortcuts import render


# from rest_framework.response import Response
# from rest_framework.decorators import api_view


# from .models import Job
# from django.forms.models import model_to_dict

# from .models import Job, Category, Education
# from django.utils.text import slugify
# from django.shortcuts import get_object_or_404



# @api_view(["GET"])
# def jobs_list(request):

#     jobs = Job.objects.all()[:20]

#     data = []

#     for j in jobs:
#         d = model_to_dict(j)

       
#         d["category"] = j.category.name if j.category else None
#         d["education"] = [e.name for e in j.education.all()] if hasattr(j, "education") else []

      
#         d["notification_pdf"] = j.notification_pdf.url if j.notification_pdf else None

#         data.append(d)

#     return Response(data)


# @api_view(["POST"])
# def add_job(request):

#     data = request.data


#     category_name = data.get("category")
#     category = None
#     if category_name:
#         category, _ = Category.objects.get_or_create(name=category_name)


#     edu_list = data.get("education", [])
#     job = Job.objects.create(
#         title=data.get("title"),
#         slug=slugify(data.get("title")),
#         job_type=data.get("job_type"),
#         department=data.get("department"),
#         category=category,
#         total_posts=data.get("total_posts"),
#         location=data.get("location"),
#         last_date=data.get("last_date"),
#         short_desc=data.get("short_desc"),
#         full_desc=data.get("full_desc"),
#         notification_pdf=data.get("notification_pdf"),
#         apply_link=data.get("apply_link"),
#     )

#     for e in edu_list:
#         edu, _ = Education.objects.get_or_create(name=e)
#         job.education.add(edu)

#     return Response({"message": "Job Added Successfully"})

# @api_view(["GET"])
# def job_detail(request, slug):
#     job = get_object_or_404(Job, slug=slug)

#     data = model_to_dict(job)

  
#     data["category"] = job.category.name if job.category else None


#     data["education"] = [e.name for e in job.education.all()]

#     data["status"] = "closed" if job.is_closed() else "open"


#     data["created_at"] = job.created_at.strftime("%d %b %Y")
#     data["updated_at"] = job.updated_at.strftime("%d %b %Y")

#     data["notification_pdf"] = (
#         job.notification_pdf.url if job.notification_pdf else None
#     )


#     data["apply_link"] = job.apply_link if hasattr(job, "apply_link") else None

#     return Response(data)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Post


# ===============================
# HOME LATEST POSTS (6)
# ===============================
@api_view(["GET"])
def latest_posts(request):
    posts = Post.objects.order_by("-created_at")[:6]

    data = []
    for p in posts:
        data.append({
            "id": p.id,
            "title": p.title,
            "slug": p.slug,
            "department": p.department,
            "status": p.status,
            "last_date": p.last_date,
            "created_at": p.created_at.strftime("%d %b %Y"),
        })

    return Response(data)


# ===============================
# ALL POSTS
# ===============================
@api_view(["GET"])
def post_list(request):
    posts = Post.objects.order_by("-created_at")

    data = []
    for p in posts:
        data.append({
            "id": p.id,
            "title": p.title,
            "slug": p.slug,
            "department": p.department,
            "status": p.status,
            "last_date": p.last_date,
        })

    return Response(data)


# ===============================
# POST DETAIL + TABLE DATA
# ===============================
@api_view(["GET"])
def post_detail(request, slug):
    post = get_object_or_404(Post, slug=slug)

    sections = []
    for s in post.sections.all().order_by("position"):
        tables = []

        for t in s.tables.all():
            rows = []
            for r in t.rows.all():
                cells = sorted(r.cells.all(), key=lambda x: x.column_index)
                rows.append([c.value for c in cells])

            tables.append({
                "title": t.title,
                "rows": rows
            })

        sections.append({
            "title": s.title,
            "tables": tables
        })

    data = {
        "title": post.title,
        "slug": post.slug,
        "department": post.department,
        "status": post.status,
        "location": post.location,
        "total_posts": post.total_posts,
        "age_limit": post.age_limit,
        "salary": post.salary,
        "last_date": post.last_date,
        "apply_link": post.apply_link,
        "notification_pdf": post.notification_pdf.url if post.notification_pdf else None,
        "short_desc": post.short_desc,
        "full_desc": post.full_desc,
        "created_at": post.created_at.strftime("%d %b %Y"),
        "updated_at": post.updated_at.strftime("%d %b %Y"),
        "sections": sections
    }

    return Response(data)